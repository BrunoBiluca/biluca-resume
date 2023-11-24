import { FaLinkedin } from 'react-icons/fa';
import { InLine } from './InLine';

export const LinkedIn = ({ profile }) => (
  <InLine>
    <FaLinkedin style={{ marginRight: ".5em" }} />
    <a href={"https://" + profile} target="_blank" rel="noreferrer">{profile}</a>
  </InLine>
);
