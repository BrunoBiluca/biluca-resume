import Entry from "../abstract/Entry.model"

export default class Skill extends Entry {
  constructor(data) {
    super(data)
    this.label = data["label"]
  }

}