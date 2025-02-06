import Entry from "./Entry.model"

export default class Education extends Entry {
  constructor(data) {
    super(data)
    this.title = data["title"]
    this.institution = data["institution"]
    this.periodBegin = data["period_begin"]
    this.periodEnd = data["period_end"]
    this.location = data["location"]
    this.description = data["description"]
  }

  period() {
    let period = this.periodBegin + " -"
    if (!this.isCurrentJob)
      period += " " + this.periodEnd

    return period
  }
}