import { loc } from "../locale/LocaleText"
import Entry from "./Entry.model"

export default class MainInformation extends Entry {
  name
  summary
  goal

  constructor(data) {
    super(data)
    this.name = data["name"]
    this.summary = loc(data["summary"])
    this.goal = loc(data["goal"])
  }

}