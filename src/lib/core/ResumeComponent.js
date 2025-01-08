import EditController from "../profiles/edit_controller/EditController"
import Profile from "../profiles/Profile"

export default class ResumeComponent {
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

    if (!Profile.i().getActiveProfile().canEdit || !Profile.i().isEditMode) {
      return this.component
    }

    return <EditController
      isHidden={false}
      onChange={(hidden) => {
        console.log("Alterando o estado do componente para ", hidden ? "escondido" : "exibido")
      }}
    >
      {this.component}
    </EditController>
  }
}