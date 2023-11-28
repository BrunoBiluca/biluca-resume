import styles from "./ContactInformation.module.css"
import ComponentsFactory from "../../core/ComponentsFactory";

const ContactInformation = ({ contactInfo }) => (
  <div style={{ margin: "0.5em 0" }}>
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

