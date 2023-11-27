import styles from "./ContactInformation.module.css"
import ComponentsFactory from "../../core/ComponentsFactory";

const ContactInformation = ({ contactInfo }) => (
  <div style={{ margin: "0.5em 0" }}>
    {
      contactInfo.entries.map(contact =>
        <div key={contact.key()} className={styles.contactInformation}>
          {ComponentsFactory.i().instantiate(contact)}
        </div>
      )
    }
  </div>
)

export default ContactInformation;

