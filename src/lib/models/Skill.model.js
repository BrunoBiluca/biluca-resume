import Entry from "./Entry.model"

export default class Skill extends Entry{
  constructor(data) {
    super(data)
    this.label = data["label"]
  }

  key(){
    return this.label
  }
}