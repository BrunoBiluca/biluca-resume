import React from "react"
import Profile from "../../../profiles/Profile"
import styles from "./MainInformation.module.css"
import LocaleText from "../../../locale/LocaleText"
import { LocaleInput } from "../../../locale/LocaleInput"

export default function MainInformation({ info }) {

  function getCurrentGoal() {
    const profileGoal = Profile.i().getGoal()
    if (profileGoal.length > 0)
      return profileGoal

    if (info.goal.length > 0)
      return info.goal

    return [""]
  }

  const [isEditMode, setEditMode] = React.useState(Profile.i().isEditMode)
  const [goals, setGoals] = React.useState(getCurrentGoal());

  Profile.i().subscribe(() => {
    setEditMode(Profile.i().isEditMode)
    setGoals([...getCurrentGoal()])
  })

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gap: "1em"
      }}
    >
      <div>
        <div>
          <h1
            style={{
              margin: 0,
              color: "var(--font-highlight-color)",
              fontSize: "calc(var(--font-size-title-1) + 8px)",
            }}
          >
            {info.name}
          </h1>
          {
            isEditMode ?
              <LocaleInput
                values={goals}
                onChange={(value) => {
                  Profile.i().setGoal(value["order"], value["value"])
                }}
              />
              :
              <p
                style={{
                  margin: "0.4em 0",
                  marginBottom: "1em",
                  color: "var(--font-main-color)",
                  fontSize: "calc(var(--font-size-title-2))",
                }}
                alt={goals}
              >
                <LocaleText values={goals} />
              </p>
          }
        </div>
        <p className={styles.summary}>{info.summary}</p>
      </div>
      <div
        style={{
          height: "inherit",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "cover",
          }}
          src={info.picture}
          alt="Foto de perfil da pessoa do currículo"
        />
      </div>
    </div >
  );
}