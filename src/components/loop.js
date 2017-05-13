import PropTypes from "prop-types"
import React from "react"

export default class Loop extends React.Component {
  constructor(props) {
    super(props)
    this.subscribe = this.subscribe.bind(this)
    this.unsubscribe = this.unsubscribe.bind(this)
    this.tick = this.tick.bind(this)
    this.subscriptions = []
    this.previousTime = Date.now()
  }

  componentWillMount() {
    this.request = window.requestAnimationFrame(this.tick)
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.request)
  }

  getChildContext() {
    return {
      loop: {
        subscribe: this.subscribe,
        unsubscribe: this.unsubscribe
      }
    }
  }

  subscribe(callback) {
    this.subscriptions.push(callback)
  }

  unsubscribe(callback) {
    this.subscriptions = this.subscriptions.filter(subscription => subscription !== callback)
  }

  tick() {
    const currentTime = Date.now()
    this.subscriptions.forEach(subscription => subscription(this.previousTime, currentTime))
    this.request = window.requestAnimationFrame(this.tick)
    this.previousTime = currentTime
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

Loop.childContextTypes = {
  loop: PropTypes.object
}
