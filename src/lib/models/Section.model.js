import Entry from "./Entry.model"

export default class Section extends Entry {
  entries = []

  constructor(data) {
    super(data)
    this.title = data["title"]
    this.entries = data["entries"]
  }

  key() {
    return this.title
  }
}