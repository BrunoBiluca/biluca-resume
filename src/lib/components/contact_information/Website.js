import { FaGlobe } from 'react-icons/fa';
import { InLine } from './InLine';

export const Website = ({ url }) => (
  <InLine>
    <FaGlobe style={{ marginRight: ".5em" }} />
    <a href={"https://" + url} target="_blank" rel="noreferrer">{url}</a>
  </InLine>
);
