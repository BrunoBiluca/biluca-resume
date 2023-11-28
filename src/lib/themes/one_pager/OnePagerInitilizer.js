import ThemeInitializer from "../../core/abstract/ThemeInitializer"
import OnePagerComponents from "./OnePagerComponents"

export default class OnePagerInitilizer extends ThemeInitializer {
  components() {
    return new OnePagerComponents()
  }
}