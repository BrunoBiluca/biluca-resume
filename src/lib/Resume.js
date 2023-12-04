import React from "react";
import styles from "./Resume.module.css"
import ComponentsFactory from "./core/ComponentsFactory";
import ThemesFactory from "./ThemesFactory";
import Locale from "./locale/Locale";
import Config from "./config/Config";


function Resume({ data, variables }) {
  let theme = new ThemesFactory().instantiate(data)
  ComponentsFactory.setInstance(theme.components())
  Locale.setInstance(new Locale(data["locale"]))

  return <div className={styles.resume} style={variables ?? theme.variables()} >
    <Config />
    {theme.render()}
  </div>
}

export default Resume;