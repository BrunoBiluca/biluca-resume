import Entry from "../abstract/Entry.model"

export default class Mail extends Entry {
  constructor(data) {
    super(data)
    this.email = data["email"]
  }
}