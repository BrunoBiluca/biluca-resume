export default class Education {
  title
  institution
  periodBegin
  periodEnd
  location
  description

  constructor(data) {
    this.title = data["title"]
    this.institution = data["institution"]
    this.periodBegin = data["period_begin"]
    this.periodEnd = data["period_end"]
    this.location = data["location"]
    this.description = data["description"]
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