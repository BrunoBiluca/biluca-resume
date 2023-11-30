export default class BaseComponent {
  constructor(model, component) {
    this.model = model
    this.component = component
  }

  getModel() {
    return this.model
  }

  key() {
    return this.model.key()
  }

  render() {
    if (!this.model.isActive) {
      return <></>
    }

    return this.component
  }
}