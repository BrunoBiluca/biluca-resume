import React from 'react';
import styles from './MainInformation.module.css';
import Profile from '../../profiles/Profile';
import LocaleText, { LocaleInput } from '../../locale/LocaleText';


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
    <div className={styles.header}>
      <div className={styles.picture}>
        <img
          src={info.picture}
          alt="Foto de perfil da pessoa do currículo"
        />
      </div>
      <div className={styles.headerInfo}>
        <div>
          <h1 style={{ margin: 0 }}>{info.name}</h1>
          {
            isEditMode ?
              <LocaleInput
                values={goals}
                onChange={(value) => {
                  Profile.i().setGoal(value["order"], value["value"])
                }}
              />
              :
              <p className={styles.goal} alt={goals}>
                <LocaleText values={goals} />
              </p>
          }
        </div>
        <p className={styles.summary}>{info.summary}</p>
      </div>
    </div>
  );
}