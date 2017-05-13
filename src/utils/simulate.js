import Point from "./point"

export default function simulate(start, end, bodies) {
  const elapsedTime = end - start
  return bodies.map((body) => {
    const others = bodies.filter(other => other !== body)
    const accelerations = others.map(other => calculateAcceleration(body, other))
    const combinedAccelerations = accelerations.reduce((acc, force) => acc.add(force), new Point(0, 0))
    const newVelocity = body.velocity.add(combinedAccelerations)
    const normalizedVelocity = normalize(newVelocity, elapsedTime)
    const newPosition = body.position.add(normalizedVelocity)
    return Object.assign({}, body, {position: newPosition, velocity: newVelocity})
  })
}

function normalize(point, time) {
  const normalizedX = point.x / 1000 * time
  const normalizedY = point.y / 1000 * time
  return new Point(normalizedX, normalizedY)
}

function calculateAcceleration(a, b) {
  const force = (a.mass * b.mass) / (calculateDistance(a, b) ** 2)
  const acceleration = force / a.mass * 100
  const deltaX = a.position.x - b.position.x
  const deltaY = a.position.y - b.position.y
  const angle = -Math.atan2(deltaX, deltaY)
  const x = Math.sin(angle) * acceleration
  const y = -Math.cos(angle) * acceleration
  return new Point(x, y)
}

function calculateDistance(a, b) {
  const deltaX = a.position.x - b.position.x
  const deltaY = a.position.y - b.position.y
  return Math.hypot(deltaX, deltaY)
}
