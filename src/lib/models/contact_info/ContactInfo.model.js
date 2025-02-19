import Entry from "../abstract/Entry.model"

export default class ContactInfo extends Entry {
  entries = []

  constructor(data) {
    super(data)
    this.entries = data["entries"]
  }
}