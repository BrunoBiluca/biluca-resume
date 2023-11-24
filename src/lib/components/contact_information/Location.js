import { ImLocation2 } from 'react-icons/im';
import { InLine } from './InLine';

export const Location = ({ place, url }) => (
  <InLine>
    <ImLocation2 style={{ marginRight: ".5em" }} />
    <a href={url} target="_blank" rel="noreferrer">
      {place}
    </a>
  </InLine>
);
