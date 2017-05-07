import React from "react"
import {Layer, Rect, Stage} from "react-konva"

export default function space({children}) {
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
        {children}
      </Layer>
    </Stage>
  )
}
