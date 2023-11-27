import Factory from "./abstract/Factory"

export default class ComponentsFactory extends Factory {
  static _on_create(mapper) {
    return new ComponentsFactory(mapper)
  }
}