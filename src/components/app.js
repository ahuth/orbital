import React from "react"
import Body from "./body"
import Loop from "../utils/loop"
import Point from "../utils/point"
import Space from "./space"

const loop = new Loop();

export default function App() {
  return (
    <Space loop={loop}>
      <Body position={new Point(500, 400)} velocity={new Point(-10, 38)} mass={1} radius={5} color="white" />
      <Body position={new Point(700, 700)} velocity={new Point(-22, -30)} mass={1} radius={5} color="white" />
      <Body position={new Point(350, 350)} mass={50} radius={20} color="red" />
    </Space>
  )
}
