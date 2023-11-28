import React from "react";
import styles from "./Resume.module.css"
import Variables from "./Variables";
import ComponentsFactory from "./core/ComponentsFactory";
import ThemesFactory from "./ThemesFactory";


function Resume({ data, variables }) {
  let theme = ThemesFactory.i().instantiate(data["theme"])
  ComponentsFactory.setInstance(theme.components())

  let usedVariables = variables != null ? variables : new Variables()
  let resume = ComponentsFactory.i().instantiate(data, "Resume")

  return <div className={styles.resume} style={usedVariables.css()} >
    {resume.render()}
  </div>
}

export default Resume;