import Entry from "../abstract/Entry.model"

export default class Language extends Entry {
  constructor(data) {
    super(data)
    this.label = data["label"]
    this.level = data["level"]
  }

}