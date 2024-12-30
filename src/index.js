import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import styles from "./style.module.css"
import reset from "./reset.module.css"

import { Resume } from "./lib";

function App() {
  let [resume, setResume] = useState(null)

  useEffect(() => {
    async function fetchResumeData() {
      const request = await fetch("./resume/resume.json")
      const resumeJson = await request.json()
      setResume(resumeJson)
    }
    fetchResumeData()
  }, [])

  return (
    <div className={styles.app}>
      {
        resume &&
        <Resume data={resume} />
      }
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

