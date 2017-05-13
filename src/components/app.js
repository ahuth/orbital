import React from "react"
import Body from "./body"
import Loop from "./loop"
import Point from "../utils/point"
import Space from "./space"

export default function App() {
  return (
    <Loop>
      <Space>
        <Body position={new Point(233, 350)} mass={10} radius={20} color="red" />
        <Body position={new Point(466, 350)} mass={10} radius={20} color="blue" />
      </Space>
    </Loop>
  )
}
