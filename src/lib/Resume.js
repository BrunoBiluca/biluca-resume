import React from "react";
import styles from "./Resume.module.css"
import ComponentsFactory from "./core/ComponentsFactory";
import ThemesFactory from "./ThemesFactory";
import Locale from "./locale/Locale";
import Config from "./config/Config";
import Profile from "./profiles/Profile";
import { ResumeCanvas } from "./ResumeCanvas";


function Resume({ data, profiles, variables, disableEditMode = false }) {
  let theme = new ThemesFactory().instantiate(data)
  ComponentsFactory.setInstance(theme.components())
  Locale.setInstance(new Locale(data["locale"]))
  Profile.setInstance(new Profile(profiles, disableEditMode, "chave"))

  return <div className={styles.resume} style={variables ?? theme.variables()} >
    <Config />
    <ResumeCanvas theme={theme} />
  </div>
}

export default Resume;