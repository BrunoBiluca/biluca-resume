import { loc } from "../locale/LocaleText"
import Entry from "./Entry.model"

export default class Language extends Entry {
  constructor(data) {
    super(data)
    this.label = loc(data["label"])
    this.level = loc(data["level"])
  }

  key() {
    return this.label + this.level
  }
}