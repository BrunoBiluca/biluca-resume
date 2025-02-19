import { loc } from "../../locale/LocaleText"
import Entry from "../abstract/Entry.model"

export default class Game extends Entry {
  constructor(data) {
    super(data)
    this.name = data["name"]
    this.description = loc(data["description"])
    this.role = data["role"]
    this.repository = data["repository"]
    this.screenshoot = data["screenshoot"]
  }
}