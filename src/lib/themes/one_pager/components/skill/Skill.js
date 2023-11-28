import { useState } from "react";
import styles from "./Skills.module.css"

const Skill = ({ skill }) => {
  let [currState, setCurrState] = useState(styles.skillLabel);
  return (
    <span
      onMouseEnter={() => setCurrState(styles.skillLabelHover)}
      onMouseLeave={() => setCurrState(styles.skillLabel)}
      className={currState}
    >
      {skill.label}
    </span>
  )
}

export default Skill;