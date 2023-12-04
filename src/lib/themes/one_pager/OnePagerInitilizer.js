import Variables from "../../Variables"
import ThemeInitializer from "../../core/abstract/ThemeInitializer"
import { Resume } from "../../models"
import OnePagerComponents from "./OnePagerComponents"
import OnePagerResume from "./OnePagerResume"

export default class OnePagerInitilizer extends ThemeInitializer {
  components() {
    return new OnePagerComponents()
  }

  variables() {
    return new Variables(this.data["theme"]["variables"]).css()
  }

  render() {
    return OnePagerResume({ resume: new Resume(this.data) })
  }
}