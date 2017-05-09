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
