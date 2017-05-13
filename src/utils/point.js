export default function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.add = function (other) {
  return new Point(this.x + other.x, this.y + other.y)
}
