export default class InstantiationMapper {

  mapper = {}

  constructor() {
    this._create(this.mapper)
  }

  _create(_mapper) {
    throw new Error("You have to implement the method <_create>!")
  }

  instantiate(type, data) {
    return this.mapper[type](data)
  }
}