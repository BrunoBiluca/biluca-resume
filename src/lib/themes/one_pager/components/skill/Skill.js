import { useState } from "react";
import styles from "./Skills.module.css"

const Skill = (props) => {
  let [currState, setCurrState] = useState(styles.skillLabel);
  return (
    <span
      onMouseEnter={() => setCurrState(styles.skillLabelHover)}
      onMouseLeave={() => setCurrState(styles.skillLabel)}
      className={currState}
    >
      {props.skill.label}
    </span>
  )
}

export default Skill;