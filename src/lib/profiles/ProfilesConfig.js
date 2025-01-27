import React from "react"
import styles from './ProfilesConfig.module.css'
import BasePanel from "../components/base_panel/BasePanel";
import ProfileButton from "./ProfileButton";
import Profile from "./Profile";
import ProfileSave from "./ProfileSave";


export default function ProfilesConfig() {
  const [profiles, setProfiles] = React.useState(Profile.i().getProfiles())
  const [selectedProfile, setSelectedProfile] = React.useState("completo")
  const [showAuthorKeyInput, setShowAuthorKeyInput] = React.useState(false)

  Profile.i().subscribe(() => {
    setSelectedProfile(Profile.i().getActiveProfile().id)
    setProfiles([...Profile.i().getProfiles()])
  })

  function addProfile() {
    Profile.i().addProfile()
  }

  return (
    <BasePanel title="Perfis" onTitleClick={() => setShowAuthorKeyInput(true)}>
      {
        showAuthorKeyInput &&
        <div>
          <input
            type="text"
            onKeyDown={(event) => {
              if (event.key == "Enter") {
                setShowAuthorKeyInput(false)
                Profile.i().enterAuthorKey(event.target.value)
              }
            }}
          />
        </div>
      }
      {
        !Profile.i().isEditModeDisabled &&
        <>
          <div>
            <button onClick={addProfile}>Adicionar</button>
          </div>
          <hr />
        </>
      }
      <div id="profiles" className={styles.profiles}>
        {
          profiles.map(p =>
            <ProfileButton
              key={p.id}
              name={p.name}
              isActive={p.id === selectedProfile}
              canEdit={p.canEdit}
              onClick={() => Profile.i().setActiveProfile(p.id)}
              onSave={() => { new ProfileSave().save() }}
              onRemove={() => Profile.i().removeProfile(p.id)}
            />
          )
        }
      </div>
    </BasePanel>
  )
}