import Mail from "./models/Mail.model"
import Location from "./models/Location.model"
import Phone from "./models/Phone.model"
import Github from "./models/Github.model"
import LinkedIn from "./models/LinkedIn.model"
import Website from "./models/Website.model"

export default class ModelsFactory {

  static _i

  static instance() {
    if (this._i == null)
      this._i = new ModelsFactory()
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