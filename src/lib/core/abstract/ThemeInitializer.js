import ComponentsFactory from "../ComponentsFactory"
import ModelsFactory from "../ModelsFactory"

export default class ThemeInitilizer {
  init(){
    ModelsFactory.create_instance(this._models())
    ComponentsFactory.create_instance(this._components())
  }

  _models(){
    throw new Error("You have to implement the method <_models>!")
  }

  
  _components(){
    throw new Error("You have to implement the method <_models>!")
  }
}