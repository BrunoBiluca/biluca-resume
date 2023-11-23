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
    this.period_begin = data["period_begin"]
    this.period_end = data["period_end"]
    this.isCurrentJob = data["is_current_job"]
    this.description = data["description"]
    this.company = data["company"]
    this.companyUrl = data["companyUrl"]
    this.companyLocation = data["companyLocation"]
  }


  hasCompany() {
    return isNullOrEmpty(this.company)
  }

  period() {
    let period = this.periodBegin + " -"
    if (!this.isCurrentJob)
      period += " " + this.periodEnd

    return period
  }
}