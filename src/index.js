import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import styles from "./style.module.css"
import reset from "./reset.module.css"

import { Resume } from "./lib";
import ResumeModel from "./lib/models/Resume.model.js"

function App() {
  let [resume, setResume] = useState(null)

  useEffect(() => {
    async function fetchResumeData() {
      const request = await fetch("./resume_data/resume.json")
      const resumeJson = await request.json()
      console.log(resumeJson)
      setResume(new ResumeModel(resumeJson))
    }
    fetchResumeData()
  }, [])

  return <>
    {
      resume &&
      <div className={styles.app}>
        <Resume resume={resume} />
      </div>
    }
  </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

