import Factory from "./abstract/Factory";

export default class ThemesFactory extends Factory {
  static _on_create(mapper) {
    return new ThemesFactory(mapper)
  }
}