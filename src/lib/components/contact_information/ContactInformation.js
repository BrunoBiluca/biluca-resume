import { GrMail } from 'react-icons/gr';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import styles from "./ContactInformation.module.css"

const ContactInformation = ({ contactInfo }) => (
  <div style={{ margin: "0.5em 0" }}>
    {
      contactInfo.entries.map(contact =>
        <div key={contact.key()} className={styles.contactInformation}>
          {ContactInfoFactory(contact)}
        </div>
      )
    }
  </div>
)

export default ContactInformation;

function ContactInfoFactory(contact) {
  if (contact.type === "Mail")
    return <Mail mailto={contact.email} label={contact.email} />

  if (contact.type === "Phone")
    return <Phone number={contact.number} />

  if (contact.type === "Location")
    return <Location place={contact.place} url={contact.googleMaps} />

  if (contact.type === "Github")
    return <Github github={contact.profile} />

  if (contact.type === "LinkedIn")
    return <LinkedIn profile={contact.profile} />

  if (contact.type === "Website")
    return <Website url={contact.url} />
}

const Phone = ({ number }) => (
  <InLine>
    <BsTelephoneFill style={{ marginRight: ".5em" }} />
    <span>{number}</span>
  </InLine>
)

const Location = ({ place, url }) => (
  <InLine>
    <ImLocation2 style={{ marginRight: ".5em" }} />
    <a href={url} target="_blank" rel="noreferrer">
      {place}
    </a>
  </InLine>
)

const LinkedIn = ({ profile }) => (
  <InLine>
    <FaLinkedin style={{ marginRight: ".5em" }} />
    <a href={"https://" + profile} target="_blank" rel="noreferrer">{profile}</a>
  </InLine>
)

const Github = ({ github }) => (
  <InLine>
    <FaGithub style={{ marginRight: ".5em" }} />
    <a href={"https://" + github} target="_blank" rel="noreferrer">{github}</a>
  </InLine>
)

const Website = ({ url }) => (
  <InLine>
    <FaGlobe style={{ marginRight: ".5em" }} />
    <a href={"https://" + url} target="_blank" rel="noreferrer">{url}</a>
  </InLine>
)

const Mail = ({ mailto, label }) => (
  <InLine>
    <GrMail style={{ marginRight: ".5em" }} />
    <span style={{ textDecorationLine: "underline" }}
      to='#'
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </span>
  </InLine>
);

const InLine = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    {children}
  </div>
)

