import Entry from "./Entry.model"

export default class Game extends Entry {
  constructor(data) {
    super(data)
    this.name = data["name"]
    this.description = data["description"]
    this.role = data["role"]
    this.repository = data["repository"]
    this.screenshoot = data["screenshoot"]
  }

  key() {
    return this.name + this.description + this.role
  }
}