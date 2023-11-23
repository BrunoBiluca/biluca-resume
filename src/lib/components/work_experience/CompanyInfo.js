import HighlightText from "../highlight_text/HighlightText";

export const CompanyInfo = (props) => {
  let { company, companyUrl } = props;

  return (
    <>
      {` em `}
      <a
        href={companyUrl}
        style={{ fontStyle: "italic" }}
        target="_blank"
        rel="noreferrer"
      >
        <HighlightText text={company} />
      </a>
    </>
  );
};