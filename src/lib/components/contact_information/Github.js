import { FaGithub } from 'react-icons/fa';
import { InLine } from './InLine';

export const Github = ({ github }) => (
  <InLine>
    <FaGithub style={{ marginRight: ".5em" }} />
    <a href={"https://" + github} target="_blank" rel="noreferrer">{github}</a>
  </InLine>
);
