import styles from "./ContactInformation.module.css"
import ComponentsFactory from "../../core/ComponentsFactory";

const ContactInformation = ({ contactInfo }) => (
  <div style={{ display: 'grid', gap: "1em" }}>
    {
      contactInfo.entries.map(contact => {
        let comp = ComponentsFactory.i().instantiate(contact)
        return (
          <div key={comp.key()} className={styles.contactInformation}>
            {comp.render()}
          </div>
        )
      }
      )
    }
  </div>
)

export default ContactInformation;

