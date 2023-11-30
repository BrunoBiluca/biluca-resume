import Factory from "./core/abstract/Factory";
import OnePagerInitilizer from "./themes/one_pager/OnePagerInitilizer";

export default class ThemesFactory {

  mapper = {}

  constructor() {
    this._create(this.mapper)
  }

  instantiate(data, type = null) {
    if (type === null)
      type = data["theme"]["type"]

    if (!type)
      console.error("Error: type should be pass to data -> " + JSON.stringify(data))

    try {
      return this.mapper[type](data)
    } catch (error) {
      console.log(type)
      throw error
    }
  }

  _create(mapper) {
    mapper["OnePager"] = (d) => new OnePagerInitilizer(d)
  }

}