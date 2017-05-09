import PropTypes from "prop-types"
import React, {Component} from "react"

export default class Loop extends Component {
  constructor(props) {
    super(props)
    this.tick = this.tick.bind(this)
    this.subscribe = this.subscribe.bind(this)
    this.subscribers = []
  }

  componentWillMount() {
    this.request = window.requestAnimationFrame(this.tick)
  }

  componentWillUnmount() {
    window.cancelRequestAnimationFrame(this.request)
  }

  getChildContext() {
    return {subscribe: this.subscribe}
  }

  tick() {
    this.subscribers.forEach(callback => callback())
    this.request = window.requestAnimationFrame(this.tick)
  }

  subscribe(callback) {
    this.subscribers.push(callback)
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

Loop.childContextTypes = {
  subscribe: PropTypes.func
}
