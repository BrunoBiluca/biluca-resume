import { useState } from "react";
import styles from "./Tag.module.css"

const Tag = ({ label }) => {
  let [currState, setCurrState] = useState(styles.tag);
  return (
    <span
      onMouseEnter={() => setCurrState(styles.tagHover)}
      onMouseLeave={() => setCurrState(styles.tag)}
      className={currState}
    >
      {label}
    </span>
  )
}

export default Tag;