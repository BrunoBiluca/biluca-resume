import React from "react"
import { v4 as uuidv4 } from 'uuid';
import styles from './ProfilesConfig.module.css'
import BasePanel from "../components/base_panel/BasePanel";


export default function ProfilesConfig() {
  const [profiles, setProfiles] = React.useState([
    {
      id: "completo",
      name: "Completo",
      hidden_content: [],
      createdAt: Date.now()
    }
  ])
  const [selectedProfile, setSelectedProfile] = React.useState("completo")

  return (
    <BasePanel title="Perfis">
      <div>
        <button
          onClick={() => {
            console.log("Adicionar perfil")

            let newProfileName = "Novo perfil"

            const count = profiles.filter(p => p.name.startsWith("Novo perfil")).length + 1
            if (count > 1) {
              newProfileName += " " + count
            }

            const newProfile = {
              id: uuidv4(),
              name: newProfileName,
              hidden_content: [],
              createdAt: Date.now()
            }

            setProfiles([...profiles, newProfile])
            setSelectedProfile(newProfile.id)
          }}
        >Adicionar</button>
      </div>
      <hr />
      <div id="profiles" className={styles.profiles}>
        {
          profiles.map(p =>
            <button
              role="option"
              disabled={p.id === selectedProfile}
              key={p.id}
              onClick={() => setSelectedProfile(p.id)}
            >
              {p.name}
            </button>
          )
        }
      </div>
    </BasePanel>
  )
}