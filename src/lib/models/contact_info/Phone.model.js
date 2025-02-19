import Entry from "../abstract/Entry.model"

export default class Phone extends Entry {
  constructor(data) {
    super(data)
    this.number = data["number"]
  }

}