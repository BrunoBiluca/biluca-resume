import React from "react";
import styles from "./Resume.module.css"
import ComponentsFactory from "./core/ComponentsFactory";
import ThemesFactory from "./ThemesFactory";
import Locale from "./locale/Locale";
import Config from "./config/Config";
import Profile from "./profiles/Profile";
import NoPrint from "./components/no_print/NoPrint";


function ResumeCanvas({ theme }) {
  const [title, setTitle] = React.useState(Profile.i().getActiveProfile().name)
  const [isEditMode, setEditMode] = React.useState(Profile.i().isEditMode)
  const [resumeVersion, setResumeVersion] = React.useState(0)

  Profile.i().subscribe(() => {
    setTitle(Profile.i().getActiveProfile().name)
    setEditMode(Profile.i().isEditMode)
    setResumeVersion(resumeVersion + 1)
  })

  return <div>
    <NoPrint>
      <h1 name={resumeVersion}>{title} {isEditMode && "(Editando)"}</h1>
    </NoPrint>
    {theme.render()}
  </div>
}


function Resume({ data, profiles, variables, disableEditMode = false }) {
  let theme = new ThemesFactory().instantiate(data)
  ComponentsFactory.setInstance(theme.components())
  Locale.setInstance(new Locale(data["locale"]))
  Profile.setInstance(new Profile(profiles, disableEditMode))

  return <div className={styles.resume} style={variables ?? theme.variables()} >
    <Config />
    <ResumeCanvas theme={theme} />
  </div>
}

export default Resume;