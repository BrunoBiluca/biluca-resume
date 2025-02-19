import { loc } from "../locale/LocaleText"
import Entry from "./abstract/Entry.model"

export default class MainInformation extends Entry {
  name
  summary
  goal

  constructor(data) {
    super(data)
    this.picture = data["picture"]
    this.name = data["name"]
    this.summary = loc(data["summary"])
    this.goal = data["goal"]
  }
}