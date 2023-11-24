import Entry from "./Entry.model";

export default class Website extends Entry {
  constructor(data) {
    super(data)
    this.url = data["url"]
  }

  key() {
    return this.url
  }
}