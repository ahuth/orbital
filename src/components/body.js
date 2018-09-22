import Point from "../utils/point"
import React from "react"
import {Circle} from "react-konva"

export default function Body({color, radius, mass, position, velocity}) {
  return (
    <Circle
      x={position.x}
      y={position.y}
      radius={radius}
      fill={color}
    />
  )
}

Body.defaultProps = {
  velocity: new Point(0, 0)
}
