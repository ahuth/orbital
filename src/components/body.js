import React from "react"
import {Circle} from "react-konva"

export default function body({color, mass, x, y}) {
  return (
    <Circle
      x={x}
      y={y}
      radius={mass / 10}
      fill = {color}
    />
  )
}
