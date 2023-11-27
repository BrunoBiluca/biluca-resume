import { isNullOrEmpty } from "../helpers/StringExtensions"
import Entry from "./Entry.model"

export default class Certificate extends Entry{
  title
  platform
  emissionDate
  description
  url

  constructor(data) {
    super(data)
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