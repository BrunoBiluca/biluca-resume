import React from "react";
import styles from "./Resume.module.css"
import Theme from "./Theme";
import OnePagerResume from "./themes/one_pager/OnePagerResume";

function Resume({ data, theme }) {
  let usedTheme = theme != null ? theme : new Theme()
  console.log(data)

  return <div className={styles.resume} style={usedTheme.css()} >
    <OnePagerResume data={data} />
  </div>
}

export default Resume;