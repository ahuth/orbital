import React from "react"
import PropTypes from "prop-types"
import {Layer, Rect, Stage} from "react-konva"

export default class Space extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bodies: React.Children.map(props.children, this.processChild)
    }
  }

  componentWillMount() {
    this.context.loop.subscribe(this.update)
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update)
  }

  processChild(child) {
    return {
      component: child,
      x: child.props.x,
      y: child.props.y
    }
  }

  processedChildren() {
    return this.state.bodies.map((child, index) => {
      return React.cloneElement(child.component, {x: child.x, y: child.y, key: index})
    })
  }

  update(time) {
    // console.log(time)
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

Space.contextTypes = {
  loop: PropTypes.object
}
