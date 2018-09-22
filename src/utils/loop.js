export default class Loop {
  constructor() {
    this.handlers = [];
    this.prev = window.performance.now();
    this.request = window.requestAnimationFrame(this.tick);
  }

  tick = (timestamp) => {
    this.handlers.forEach(handler => handler(timestamp - this.prev));
    this.request = window.requestAnimationFrame(this.tick);
    this.prev = timestamp;
  };

  subscribe(callback) {
    this.handlers.push(callback);
  };

  stop() {
    this.handlers = [];
    window.cancelAnimationFrame(this.request);
  };
}
