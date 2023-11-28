import Factory from "./core/abstract/Factory";
import OnePagerInitilizer from "./themes/one_pager/OnePagerInitilizer";

export default class ThemesFactory extends Factory {
  _create(mapper) {
    mapper["OnePager"] = (d) => new OnePagerInitilizer()
  }
}