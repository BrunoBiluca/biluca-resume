import React from "react";
import styles from "./Resume.module.css"
import Variables from "./Variables";
import ComponentsFactory from "./core/ComponentsFactory";
import ThemesFactory from "./ThemesFactory";
import Locale from "./locale/Locale";
import Config from "./config/Config";


function Resume({ data, variables }) {
  let theme = ThemesFactory.i().instantiate(data["theme"])
  ComponentsFactory.setInstance(theme.components())

  Locale.setInstance(new Locale(data["locale"]))

  let usedVariables = variables != null ? variables : new Variables()
  let resume = ComponentsFactory.i().instantiate(data, "Resume")

  return <div className={styles.resume} style={usedVariables.css()} >
    <Config />
    {resume.render()}
  </div>
}

export default Resume;