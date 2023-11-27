export const CompanyInfo = (props) => {
  let { company, companyUrl } = props;

  return (
    <>
      {` em `}
      <a
        href={companyUrl}
        style={{ fontStyle: "italic", color: "#666" }}
        target="_blank"
        rel="noreferrer"
      >
        {company}
      </a>
    </>
  );
};