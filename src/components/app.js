import React from "react"
import Body from "./body"
import Loop from "./loop"
import Point from "../utils/point"
import Space from "./space"

export default function App() {
  return (
    <Loop>
      <Space>
        <Body position={new Point(350, 350)} radius={20} color="red" />
      </Space>
    </Loop>
  )
}
