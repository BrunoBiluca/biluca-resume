import React from 'react';
import ReactDOM from "react-dom/client";
import styles from "./style.module.css"
import reset from "./reset.module.css"

import { Resume } from "./lib";
import Theme from './lib/Theme.js';
import ResumeModel from "./lib/models/Resume.model.js"
import MainInformation from './lib/models/MainInformation.model.js';
import WorkExperience from './lib/models/WorkExperience.model.js';
import Certificate from './lib/models/Certificate.model.js';
import Education from './lib/models/Education.model.js';

import main_data from "./resume_data/main_information.json"
import work_experiences from "./resume_data/work_experiences.json"
import certificates from "./resume_data/certificates.json"
import education from "./resume_data/education.json"


function App() {
  let main = new MainInformation(main_data)
  let resume = new ResumeModel(main)

  for (let wexp of work_experiences) {
    resume.addWorkExperience(new WorkExperience(wexp))
  }

  for (let cert of certificates) {
    resume.addCertificate(new Certificate(cert))
  }

  for (let edu of education) {
    resume.addEducation(new Education(edu))
  }

  let theme = new Theme()
  theme.fontHighlightColor = "#bf612c"

  return (
    <div className={styles.app}>
      <Resume resume={resume} theme={theme}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

