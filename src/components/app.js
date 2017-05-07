import React from "react"
import Space from "./space"
import {Circle} from "react-konva"

export default function App() {
  return (
    <Space>
      <Circle
        x={350}
        y={350}
        radius={20}
        fill="red"
      />
    </Space>
  )
}
