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

    let compoenentId = this.model.key()

    return <EditController
      isHidden={Profile.i().isComponentHidden(compoenentId)}
      onChange={(hide) => {
        if (hide) {
          Profile.i().hideComponent(compoenentId)
        }
        else {
          Profile.i().showComponent(compoenentId)
        }
      }}
    >
      {this.component}
    </EditController>
  }
}