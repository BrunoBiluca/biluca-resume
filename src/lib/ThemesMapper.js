import InstantiationMapper from "./core/abstract/InstantiationMapper";
import OnePagerInitilizer from "./themes/one_pager/OnePagerInitilizer";

export default class ThemesMapper extends InstantiationMapper {
  _create(mapper) {
    mapper["OnePager"] = (d) => new OnePagerInitilizer()
  }
}