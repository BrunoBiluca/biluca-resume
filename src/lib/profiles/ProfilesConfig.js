import React from "react"
import { v4 as uuidv4 } from 'uuid';
import styles from './ProfilesConfig.module.css'
import BasePanel from "../components/base_panel/BasePanel";
import ProfileButton from "./ProfileButton";
import Profile from "./Profile";


export default function ProfilesConfig() {
  const [profiles, setProfiles] = React.useState(Profile.i().getProfiles())
  const [selectedProfile, setSelectedProfile] = React.useState("completo")

  Profile.i().subscribe(() => {
    setSelectedProfile(Profile.i().getActiveProfile().id)
  })

  function addProfile() {
    console.log("Adicionar perfil")

    let newProfileName = "Novo perfil"

    const count = profiles.filter(p => p.name.startsWith("Novo perfil")).length + 1
    if (count > 1) {
      newProfileName += " " + count
    }

    const newProfile = {
      id: uuidv4(),
      name: newProfileName,
      canEdit: true,
      hidden_content: [],
      createdAt: Date.now()
    }

    setProfiles([...profiles, newProfile])
    Profile.i().addProfile(newProfile)
  }

  return (
    <BasePanel title="Perfis">
      <div>
        <button onClick={addProfile}>Adicionar</button>
      </div>
      <hr />
      <div id="profiles" className={styles.profiles}>
        {
          profiles.map(p =>
            <ProfileButton
              key={p.id}
              name={p.name}
              isActive={p.id === selectedProfile}
              canEdit={p.canEdit}
              onClick={() => Profile.i().setActiveProfile(p.id)}
            />
          )
        }
      </div>
    </BasePanel>
  )
}