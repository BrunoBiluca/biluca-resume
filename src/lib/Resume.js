import React from "react";
import styles from "./Resume.module.css"
import Variables from "./Variables";
import ModelsFactory from "./core/ModelsFactory";
import ComponentsFactory from "./core/ComponentsFactory";
import ThemesFactory from "./core/ThemesFactory";
import ThemesMapper from "./ThemesMapper";


function Resume({ data, variables }) {
  ThemesFactory.create_instance(new ThemesMapper())
  let theme = ThemesFactory.i().instantiate(data["theme"])
  theme.init()

  let usedVariables = variables != null ? variables : new Variables()
  let resume = ModelsFactory.i().instantiate(data, "Resume")
  let resumeComp = ComponentsFactory.i().instantiate(resume)

  return <div className={styles.resume} style={usedVariables.css()} >
    {resumeComp}
  </div>
}

export default Resume;