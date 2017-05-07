import React from "react"
import {Layer, Rect, Stage} from "react-konva"

export default function App() {
  return (
    <Stage height={700} width={700}>
      <Layer>
        <Rect
          x={10}
          y={10}
          width={50}
          height={50}
          shadowBlur={10}
          fill="green"
        />
      </Layer>
    </Stage>
  )
}
