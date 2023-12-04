import Variables from "../../Variables"

export default class ThemeInitializer {

  constructor(data) {
    this.data = data
  }

  components() {
    console.error("Method <components> must be implemeted")
  }

  variables() {
    console.error("Method <variables> must be implemeted")
  }

  render() {
    console.error("Method <render> must be implemeted")
  }
}