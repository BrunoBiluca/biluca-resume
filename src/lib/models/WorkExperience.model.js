import { isNullOrEmpty } from "../helpers/StringExtensions"
import { loc } from "../locale/LocaleText"
import Entry from "./Entry.model"

export default class WorkExperience extends Entry {

  title
  periodBegin
  periodEnd
  isCurrentJob
  description
  company
  companyUrl
  companyLocation

  constructor(data) {
    super(data)
    this.title = loc(data["title"])
    this.periodBegin = data["period_begin"]
    this.periodEnd = data["period_end"]
    this.isCurrentJob = data["is_current_job"]
    this.description = loc(data["description"])
    this.company = data["company"]
    this.companyUrl = data["company_url"]
    this.companyLocation = data["company_location"]
  }

  hasCompany() {
    return !isNullOrEmpty(this.company)
  }

  period() {
    let period = this.periodBegin + " -"
    if (this.isCurrentJob)
      period = loc([period + " Atual", period + " Present"])
    else
      period += " " + this.periodEnd

    return period
  }
}