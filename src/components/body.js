import PropTypes from "prop-types"
import React from "react"
import {Circle} from "react-konva"

export default function Body({color, radius, x, y}) {
  return (
    <Circle
      x={x}
      y={y}
      radius={radius}
      fill={color}
    />
  )
}

Body.propTypes = {
  color: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}
