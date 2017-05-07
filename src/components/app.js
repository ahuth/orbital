import React from "react"
import {Circle, Layer, Rect, Stage} from "react-konva"

export default function App() {
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
        <Circle
          x={350}
          y={350}
          radius={20}
          fill="red"
        />
      </Layer>
    </Stage>
  )
}
