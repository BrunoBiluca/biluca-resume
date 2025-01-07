import React from "react"
import { classNames } from "../helpers/ComponentExtensions"
import resumeStyles from "../Resume.module.css"
import {v4 as uuidv4} from 'uuid';


export function ProfilesPanel() {
  const [profiles, setProfiles] = React.useState([])

  return (
    <div className={classNames(resumeStyles.noPrint)}>
      <h2>Perfis</h2>
      <div>
        <button
          onClick={() => {
            console.log("Adicionar perfil")
            setProfiles([...profiles, { 
              id: uuidv4(),
              name: "Novo perfil",
              hidden_content: [],
              createdAt: Date.now()
            }])
          }}
        >Adicionar</button>
      </div>
      <div id="profiles">
        <button role="option">Completo</button>
        {profiles.map(p => <button role="option">{p.name}</button>)}
      </div>
    </div>
  )
}