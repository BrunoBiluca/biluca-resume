export default class Factory {
  static _i

  static i() {
    if (!this._i) {
      this._i = new this()
    }

    return this._i
  }

  static setInstance(factory) {
    this._i = factory
  }

  mapper = {}

  constructor() {
    this._create(this.mapper)
  }

  _create(_mapper) {
    console.error("Method <_create> should be implemeted")
  }

  instantiate(data, type = null) {
    if (type === null)
      type = data["type"]

    if (!type)
      console.error("Error: type should be pass to data -> " + JSON.stringify(data))

    try {
      return this.mapper[type](data)
    } catch (error) {
      console.log(type)
      throw error
    }
  }
}