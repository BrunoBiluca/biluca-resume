import ThemeInitilizer from "../../core/abstract/ThemeInitializer"
import OnePagerComponents from "./OnePagerComponents"
import OnePagerModels from "./OnePagerModels"

export default class OnePagerInitilizer extends ThemeInitilizer {
  _models() {
    return new OnePagerModels()
  }


  _components() {
    return new OnePagerComponents()
  }
}