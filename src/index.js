import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import styles from "./style.module.css"
import reset from "./reset.module.css"

import { Resume } from "./lib";

function App() {
  let [resume, setResume] = useState(null)
  let [profiles, setProfiles] = useState([])

  useEffect(() => {
    async function fetchResumeData() {
      const request = await fetch("./resume/resume.json")
      const resumeJson = await request.json()
      setResume(resumeJson)
    }

    async function fetchProfileData() {
      const request = await fetch("./resume/profiles.json")
      const profileJson = await request.json()
      setProfiles(profileJson)
    }

    fetchResumeData()
    fetchProfileData()
  }, [])

  return (
    <div className={styles.app}>
      {
        resume &&
        <Resume data={resume} profiles={profiles} />
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

