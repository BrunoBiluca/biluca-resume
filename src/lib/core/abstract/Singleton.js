export default class Singleton {
  static _i

  static i() {
    if (!this._i)
      this._i = new this()

    return this._i
  }

  static setInstance(i) {
    this._i = i
  }
}