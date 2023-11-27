export default class Factory {
  static _i

  static create_instance(instantiationMapper) {
    this._i = this._on_create(instantiationMapper)
  }

  static _on_create(_mapper) {
    throw new Error("You have to implement the method <_on_create>!")
  }

  static i() {
    return this._i
  }

  mapper = {}

  constructor(mapper) {
    this.mapper = mapper
  }

  instantiate(data, type = null) {
    if (type === null)
      type = data["type"]

    if (!type)
      console.log(data)
    return this.mapper.instantiate(type, data)
  }
}