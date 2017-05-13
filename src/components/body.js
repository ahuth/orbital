import Point from "../utils/point"
import PropTypes from "prop-types"
import React from "react"
import {Circle} from "react-konva"

export default function Body({color, radius, position}) {
  return (
    <Circle
      x={position.x}
      y={position.y}
      radius={radius}
      fill={color}
    />
  )
}

Body.propTypes = {
  color: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  position: PropTypes.instanceOf(Point).isRequired
}
