import Mail from "./Mail"
import Location from "./Location.model"
import Phone from "./Phone.model"
import Github from "./Github.model"
import LinkedIn from "./LinkedIn.model"
import Website from "./Website.model"

export default class ModelFac {

  static _i

  static instance() {
    if (this._i == null)
      this._i = new ModelFac()
    return this._i
  }

  instantiate(data, type = null) {

    if (type === null)
      type = data["type"]

    return {
      "Mail": new Mail(data),
      "Phone": new Phone(data),
      "Location": new Location(data),
      "Github": new Github(data),
      "LinkedIn": new LinkedIn(data),
      "Website": new Website(data),
    }
    [type]
  }
}