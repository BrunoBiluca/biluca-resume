import Entry from "./Entry.model";

export default class Phone extends Entry {
  constructor(data) {
    super(data)
    this.number = data["number"]
  }

  key() {
    return this.number
  }
}