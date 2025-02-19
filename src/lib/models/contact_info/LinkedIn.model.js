import Entry from "../abstract/Entry.model"

export default class LinkedIn extends Entry {
  constructor(data) {
    super(data)
    this.profile = data["profile"]
  }

}