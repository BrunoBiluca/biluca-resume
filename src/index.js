import React from 'react';
import ReactDOM from "react-dom/client";
import styles from "./style.module.css"
import reset from "./reset.module.css"

import { Resume } from "./lib";
import ResumeModel from "./lib/models/Resume.model.js"
import resume_data from "./resume_data/resume.json"


function App() {
  let resume = new ResumeModel(resume_data)

  console.log(resume)

  return (
    <div className={styles.app}>
      <Resume resume={resume} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

