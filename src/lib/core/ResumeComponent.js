import EditController from "../profiles/edit_controller/EditController"
import Profile from "../profiles/Profile"


export function rc(model, component) {
  return new ResumeComponent(model, component)
}


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
    let compoenentId = this.model.key()
    const profile = Profile.i()
    
    if (profile.getActiveProfile().canEdit && profile.isEditMode) {
      return <EditController
        isHidden={profile.isComponentHidden(compoenentId)}
        onChange={(hide) => {
          if (hide) {
            profile.hideComponent(compoenentId)
          }
          else {
            profile.showComponent(compoenentId)
          }
        }}
      >
        {this.component}
      </EditController>
    }

    if (!this.model.isActive || profile.isComponentHidden(compoenentId)) {
      return <></>
    }

    return this.component
  }
}