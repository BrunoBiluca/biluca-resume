import Factory from "./abstract/Factory"

export function cfac() { return ComponentsFactory.i() }

export default class ComponentsFactory extends Factory {

  render(data) {
    return this.instantiate(data).render()
  }
}