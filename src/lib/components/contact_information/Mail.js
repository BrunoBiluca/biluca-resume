import { GrMail } from 'react-icons/gr';
import { InLine } from './InLine';

export const Mail = ({ email, label }) => (
  <InLine>
    <GrMail style={{ marginRight: ".5em" }} />
    <span style={{ textDecorationLine: "underline", cursor: "pointer" }}
      to='#'
      onClick={(e) => {
        window.location = "mailto:" + email;
        e.preventDefault();
      }}
    >
      {label}
    </span>
  </InLine>
);
