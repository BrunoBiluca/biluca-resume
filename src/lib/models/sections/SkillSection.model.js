import { loc } from "../../locale/LocaleText"
import Entry from "../abstract/Entry.model"

export default class SkillSection extends Entry {
  entries = []

  constructor(data) {
    super(data)
    this.title = loc(data["title"])
    this.categories = data["categories"]
    this.entries = data["entries"]
  }

}