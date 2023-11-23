import { isNullOrEmpty } from "../helpers/StringExtensions"

export default class Certificate {
  title
  platform
  emissionDate
  description
  url

  constructor(data) {
    this.title = data["title"]
    this.platform = data["platform"]
    this.emissionDate = data["emission_date"]
    this.description = data["description"]
    this.url = data["url"]
  }

  key() {
    return this.title + this.platform + this.emissionDate
  }

  hasUrl() {
    return !isNullOrEmpty(this.url)
  }
}