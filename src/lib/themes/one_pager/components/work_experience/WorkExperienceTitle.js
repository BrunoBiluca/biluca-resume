import { CompanyInfo } from "./CompanyInfo";
import styles from "./WorkExperience.module.css"

export default function WorkExperienceTitle(props) {
  let { workExperience } = props;

  return (
    <h2 className={styles.workExperienceTitle}>
      {workExperience.title}
      {
        workExperience.hasCompany()
        &&
        <CompanyInfo
          company={workExperience.company}
          companyUrl={workExperience.companyUrl}
        />
      }
    </h2>
  );
};
