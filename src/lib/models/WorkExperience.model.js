import { isNullOrEmpty } from "../helpers/StringExtensions"

export default class WorkExperience {

  title
  periodBegin
  periodEnd
  isCurrentJob
  description
  company
  companyUrl
  companyLocation

  constructor(data) {
    this.title = data["title"]
    this.periodBegin = data["period_begin"]
    this.periodEnd = data["period_end"]
    this.isCurrentJob = data["is_current_job"]
    this.description = data["description"]
    this.company = data["company"]
    this.companyUrl = data["company_url"]
    this.companyLocation = data["company_location"]
  }

  key() {
    return this.title + this.company + this.period()
  }

  hasCompany() {
    return !isNullOrEmpty(this.company)
  }

  period() {
    let period = this.periodBegin + " -"
    if (!this.isCurrentJob)
      period += " " + this.periodEnd

    return period
  }
}