import Entry from "./Entry.model"

export default class Section extends Entry {
  entries = []

  constructor(data) {
    super(data)
    this.title = data["title"]
  }

  add(entry) {
    this.entries.push(entry)
  }

  key() {
    return this.title
  }
}