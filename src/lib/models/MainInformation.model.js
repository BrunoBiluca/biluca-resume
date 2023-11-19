export default class MainInformation {
  name
  summary
  goal

  constructor(data) {
    this.name = data["name"]
    this.summary = data["summary"]
    this.goal = data["goal"]
  }
}