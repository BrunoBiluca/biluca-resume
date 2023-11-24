import styles from "./ContactInformation.module.css"
import { ContactInfoFactory } from "./ContactInfoFactory";

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

