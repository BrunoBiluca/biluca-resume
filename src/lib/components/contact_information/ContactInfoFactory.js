import { Mail } from './Mail';
import { Website } from './Website';
import { Github } from './Github';
import { LinkedIn } from './LinkedIn';
import { Location } from './Location';
import { Phone } from './Phone';

export function ContactInfoFactory(contact) {
  if (contact.type === "Mail")
    return <Mail mailto={contact.email} label={contact.email} />;

  if (contact.type === "Phone")
    return <Phone number={contact.number} />;

  if (contact.type === "Location")
    return <Location place={contact.place} url={contact.googleMaps} />;

  if (contact.type === "Github")
    return <Github github={contact.profile} />;

  if (contact.type === "LinkedIn")
    return <LinkedIn profile={contact.profile} />;

  if (contact.type === "Website")
    return <Website url={contact.url} />;
}
