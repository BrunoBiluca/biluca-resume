import ThemeInitializer from "../../core/abstract/ThemeInitializer"
import { Resume } from "../../models"
import OnePagerComponents from "./OnePagerComponents"
import OnePagerResume from "./OnePagerResume"

export default class OnePagerInitilizer extends ThemeInitializer {
  components() {
    return new OnePagerComponents()
  }

  render() {
    return OnePagerResume({ resume: new Resume(this.data) })
  }
}