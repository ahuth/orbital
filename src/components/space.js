import PropTypes from "prop-types"
import React from "react"
import simulate from "../utils/simulate"
import {Layer, Rect, Stage} from "react-konva"

export default class Space extends React.Component {
  constructor(props) {
    super(props)
    this.update = this.update.bind(this)
    this.state = {
      bodies: React.Children.map(props.children || [], this.processChild)
    }
  }

  componentDidMount() {
    this.props.loop.subscribe(this.update)
  }

  componentWillUnmount() {
    this.props.loop.stop()
  }

  processChild(child) {
    return {
      component: child,
      mass: child.props.mass,
      position: child.props.position,
      velocity: child.props.velocity
    }
  }

  processedChildren() {
    return this.state.bodies.map((child, index) => {
      return React.cloneElement(child.component, {position: child.position, key: index})
    })
  }

  update() {
    this.setState({
      bodies: simulate(this.state.bodies)
    })
  }

  render() {
    return (
      <Stage height={700} width={700}>
        <Layer>
          <Rect
            x={0}
            y={0}
            width={700}
            height={700}
            fill="#191919"
          />
        </Layer>
        <Layer>
          {this.processedChildren()}
        </Layer>
      </Stage>
    )
  }
}
