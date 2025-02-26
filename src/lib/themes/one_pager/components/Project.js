import { FaDownload, FaGithub } from "react-icons/fa";
import { loc } from "../../../locale/LocaleText";

export default function Project({ project }) {
  return <div>
    <div style={{ display: "flex", gap: ".5em", marginBottom: ".5em" }}>
      <h2
        style={{ flex: "1" }}
      >
        {project.title}
      </h2>
      <a
        href={project.repo} target="_blank" rel="noreferrer"
        style={{ color: "var(--font-main-color)" }}
      >
        <FaGithub />
      </a>
      <a
        href={project.release_link} target="_blank" rel="noreferrer"
        style={{ color: "var(--font-main-color)" }}
      >
        <FaDownload />
      </a>
    </div>

    <div style={{ display: "grid", gap: ".5em" }}>
      <p><strong>Tech Stack:</strong> {loc(project.tech_stack)}</p>
      <p style={{ fontStyle: "italic" }}>
        {loc(project.description)}
      </p>
      <p style={{ fontWeight: "bold" }}>
        {loc(project.role)}
      </p>
    </div>
  </div>
}