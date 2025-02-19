import Entry from "../abstract/Entry.model"

export default class Section extends Entry {
  entries = []

  constructor(data) {
    super(data)
    this.title = data["title"]
    this.entries = data["entries"]
  }

}