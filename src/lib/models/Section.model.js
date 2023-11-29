import { loc } from "../locale/LocaleText"
import Entry from "./Entry.model"

export default class Section extends Entry {
  entries = []

  constructor(data) {
    super(data)
    this.title = loc(data["title"])
    this.entries = data["entries"]
  }

  key() {
    return this.title
  }
}