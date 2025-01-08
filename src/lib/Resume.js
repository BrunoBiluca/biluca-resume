import React from "react";
import styles from "./Resume.module.css"
import ComponentsFactory from "./core/ComponentsFactory";
import ThemesFactory from "./ThemesFactory";
import Locale from "./locale/Locale";
import Config from "./config/Config";
import Profile from "./profiles/Profile";


function ResumeCanvas({ theme }) {
  const [title, setTitle] = React.useState(Profile.i().getActiveProfile().name)
  const [isEditMode, setEditMode] = React.useState(Profile.i().isEditMode)

  Profile.i().subscribe(() => {
    setTitle(Profile.i().getActiveProfile().name)
    setEditMode(Profile.i().isEditMode)
  })

  return <div>
    <h1>{title} {isEditMode && "(Editando)"}</h1>
    {theme.render()}
  </div>
}


function Resume({ data, variables }) {
  let theme = new ThemesFactory().instantiate(data)
  ComponentsFactory.setInstance(theme.components())
  Locale.setInstance(new Locale(data["locale"]))
  Profile.setInstance(new Profile())

  return <div className={styles.resume} style={variables ?? theme.variables()} >
    <Config />
    <ResumeCanvas theme={theme} />
  </div>
}

export default Resume;