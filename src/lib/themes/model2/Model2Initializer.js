import ThemeInitializer from "../../core/abstract/ThemeInitializer";
import { Resume } from "../../models";
import Variables from "../../Variables";
import Model2Components from "./Model2Components";
import Model2Resume from "./Model2Resume";

export default class Model2Initializer extends ThemeInitializer {

  components() {
    return new Model2Components(this.data)
  }

  variables() {
    let baseCss = new Variables(this.data["theme"]["variables"]).css()

    baseCss["--font-main-family"] = "'Open Sans', sans-serif"
    baseCss["--font-main-color"] = "#999"
    baseCss["--font-highlight-color"] = "#b76107"

    return baseCss
  }

  render() {
    return Model2Resume({ resume: new Resume(this.data) })
  }
}