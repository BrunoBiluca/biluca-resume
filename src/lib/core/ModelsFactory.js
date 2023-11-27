import Factory from "./abstract/Factory"

export default class ModelsFactory extends Factory {
  static _on_create(mapper) {
    return new ModelsFactory(mapper)
  }
}