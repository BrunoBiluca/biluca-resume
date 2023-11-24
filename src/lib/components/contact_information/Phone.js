import { BsTelephoneFill } from 'react-icons/bs';
import { InLine } from './InLine';

export const Phone = ({ number }) => (
  <InLine>
    <BsTelephoneFill style={{ marginRight: ".5em" }} />
    <span>{number}</span>
  </InLine>
);
