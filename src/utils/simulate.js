export default function simulate(start, end, bodies) {
  return bodies.map((body) => {
    return Object.assign({}, body, {position: body.position.add(body.velocity)})
  })
}
