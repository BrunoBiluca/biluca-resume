import React from "react";
import Page from "../../components/page/Page";
import ComponentsFactory, { cfac } from "../../core/ComponentsFactory";
import { rc } from "../../core/ResumeComponent";
import { Education, Project, Section as SectionModel, WorkExperience } from "../../models";
import Section from "./components/Section";
import SkillSection from "./components/SkillSection";
import { loc } from "../../locale/LocaleText";
import { FaDownload, FaGithub } from "react-icons/fa";

export default function Model2Resume({ resume }) {
  let contactInfo = new SectionModel(resume.contactInfo)
  let skillSection = resume.sections.find(s => s.type == "Skill")
  let languagesSection = resume.sections.find(s => s.type == "Language")
  let eductationSection = resume.sections.find(s => s.type == "Education")
  let workSection = resume.sections.find(s => s.type == "WorkExperience")
  let projects = resume.sections.find(s => s.type == "Projects")
  return <Page>
    <div style={{
      display: "grid",
      gridTemplateColumns: "4fr 2fr",
      gap: "1em",
      height: "calc(100% - 1.6cm)",
    }}>
      <div>
        {cfac().render(resume.mainInformation)}
        {
          rc(
            workSection,
            <Section key={workSection.key()} title={workSection.title} style={{ padding: 0, margin: "1em 0" }}>
              {
                workSection.entries.map(e => {
                  let work = new WorkExperience(e)
                  return rc(
                    work,
                    <div style={{ marginBottom: "1.5em" }}>
                      <h2 style={{ marginBottom: "0.5em" }}>
                        <a
                          href={work.companyUrl}
                          style={{ fontStyle: "italic", color: "#666" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {work.company}
                        </a>, {work.companyLocation}
                      </h2>
                      <h3
                        style={{
                          justifyContent: "space-between",
                          display: "flex",
                          marginBottom: "0.5em"
                        }}
                      >
                        <span>{loc(work.title)}</span>
                        <span>{loc(work.period())}</span>
                      </h3>
                      <p style={{ fontStyle: "italic" }}>
                        {loc(work.description)}
                      </p>
                    </div>
                  )
                })
              }
            </Section>
          )
        }
      </div>
      <div
        style={{
          backgroundColor: "#b761071a",
          height: "100%",
          padding: "1em",
          display: "grid",
          gap: ".5em"
        }}
      >
        {
          rc(
            contactInfo,
            <Section key={contactInfo.key()} title={contactInfo.title}>
              {cfac().render(contactInfo)}
            </Section>
          )
        }
        {
          rc(
            skillSection,
            <SkillSection key={skillSection.key()} section={skillSection} />
          )
        }
        {
          rc(
            languagesSection,
            <Section key={languagesSection.key()} title={languagesSection.title}>
              {
                languagesSection.entries.map(e => {
                  let comp = ComponentsFactory.i().instantiate(e, languagesSection.type)
                  return (
                    <React.Fragment key={comp.key()}>
                      {comp.render()}
                    </React.Fragment>
                  )
                })
              }
            </Section>
          )
        }
        {
          rc(
            eductationSection,
            <Section key={eductationSection.key()} title={eductationSection.title}>
              {
                eductationSection.entries.map(e => {
                  let edu = new Education(e)
                  return rc(
                    edu,
                    <div>
                      <h2>{edu.institution}</h2>
                      <h3 style={{ fontWeight: "normal" }}>{loc(edu.title)}</h3>
                      <p>{edu.location}</p>
                      <p>{edu.period()}</p>
                    </div>
                  )
                }
                )
              }
            </Section>
          )
        }
        {
          rc(
            projects,
            <Section key={projects.key()} title={projects.title}>
              {
                projects.entries.map(e => {
                  let project = new Project(e)
                  return rc(
                    project,
                    <div>
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
                  )
                })
              }
            </Section>
          )
        }
      </div>
    </div>
  </Page>
}