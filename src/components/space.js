import React from "react"
import PropTypes from "prop-types"
import {Layer, Rect, Stage} from "react-konva"

export default class Space extends React.Component {
  componentWillMount() {
    this.context.loop.subscribe(this.update)
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update)
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
          {this.props.children}
        </Layer>
      </Stage>
    )
  }
}

Space.contextTypes = {
  loop: PropTypes.object
}
