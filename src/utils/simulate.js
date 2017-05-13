import Point from "./point"

export default function simulate(start, end, bodies) {
  const elapsedTime = end - start
  return bodies.map((body) => {
    const normalizedVelocity = normalize(body.velocity, elapsedTime)
    return Object.assign({}, body, {position: body.position.add(normalizedVelocity)})
  })
}

function normalize(point, time) {
  const normalizedX = point.x / 1000 * time
  const normalizedY = point.y / 1000 * time
  return new Point(normalizedX, normalizedY)
}
