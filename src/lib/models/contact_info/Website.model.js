import Entry from "../abstract/Entry.model"

export default class Website extends Entry {
  constructor(data) {
    super(data)
    this.url = data["url"]
  }

}