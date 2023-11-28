import Entry from "./Entry.model"

export default class MainInformation extends Entry {
  name
  summary
  goal

  constructor(data) {
    super(data)
    this.name = data["name"]
    this.summary = data["summary"]
    this.goal = data["goal"]
  }

  key() {
    return this.name + this.goal
  }
}