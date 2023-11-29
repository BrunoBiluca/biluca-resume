import { loc } from "../locale/LocaleText"
import Entry from "./Entry.model"

export default class Education extends Entry {
  title
  institution
  periodBegin
  periodEnd
  location
  description

  constructor(data) {
    super(data)
    this.title = loc(data["title"])
    this.institution = data["institution"]
    this.periodBegin = data["period_begin"]
    this.periodEnd = data["period_end"]
    this.location = data["location"]
    this.description = loc(data["description"])
  }

  key() {
    return this.title + this.institution + this.period()
  }

  period() {
    let period = this.periodBegin + " -"
    if (!this.isCurrentJob)
      period += " " + this.periodEnd

    return period
  }
}