import SimpleEntry from "../../../components/simple_entry/SimpleEntry";
import { loc } from "../../../locale/LocaleText";

export default function WorkExperience({ workExperience }) {
  return (
    <SimpleEntry
      title={
        <>
          {workExperience.title}
          {
            workExperience.hasCompany()
            &&
            <CompanyInfo
              company={workExperience.company}
              companyUrl={workExperience.companyUrl}
            />
          }
        </>
      }
      description={workExperience.description}
      sideTexts={[
        workExperience.period(),
        workExperience.companyLocation
      ]}
    />
  );
};

function CompanyInfo({ company, companyUrl }) {
  return <>
    { loc([" em ", " at "]) }
    <a
      href={companyUrl}
      style={{ fontStyle: "italic", color: "#666" }}
      target="_blank"
      rel="noreferrer"
    >
      {company}
    </a>
  </>
}