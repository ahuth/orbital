import React, {Component} from "react"
import Body from "../components/body"
import Space from "../components/space"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {x: 350, y: 350}
    this.update = this.update.bind(this)
  }

  componentWillMount() {
    window.requestAnimationFrame(this.update)
  }

  update() {
    if (this.state.x < 720) {
      this.setState({x: this.state.x + 1})
    } else {
      this.setState({x: -20})
    }
    window.requestAnimationFrame(this.update)
  }

  render() {
    return (
      <Space>
        <Body x={this.state.x} y={this.state.y} mass={200} color="red" />
      </Space>
    )
  }
}
