import Factory from "./abstract/Factory"

export default class ComponentsFactory extends Factory {
  render(data) {
    return this.instantiate(data).render()
  }
}