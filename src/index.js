import React from 'react';
import ReactDOM from "react-dom/client";
import { Resume } from "./lib";
import ResumeModel from "./lib/models/Resume.model.js"
import styles from "./style.module.css"
import reset from "./reset.module.css"
import main_data from "./resume_data/main_information.json"
import work_experiences from "./resume_data/work_experiences.json"
import MainInformation from './lib/models/MainInformation.model.js';
import WorkExperience from './lib/models/WorkExperience.model.js';

function App() {
  let main = new MainInformation(main_data)
  let resume = new ResumeModel(main)

  for (let wexp of work_experiences) {
    resume.addWorkExperience(new WorkExperience(wexp))
  }

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

