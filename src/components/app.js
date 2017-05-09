import React from "react"
import Body from "./body"
import Loop from "./loop"
import Space from "./space"

export default function App() {
  return (
    <Loop>
      <Space>
        <Body x={350} y={350} radius={20} color="red" />
      </Space>
    </Loop>
  )
}
