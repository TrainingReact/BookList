import LabelSwitchTypes from "../../types/LabelSwitchTypes/LabelSwitchTypes";
import { Wrapper, Switch } from "./LabelSwitchStyle";
const LabelSwitch: React.FC<LabelSwitchTypes> = ({ toggle, setToggle }) => {
  return (
    <Wrapper
      onClick={() => setToggle(!toggle)}
      className={toggle ? `flex-end` : `flex-start`}
      color={toggle ? `#2196f3` : `#CCCCCC`}
    >
      <Switch></Switch>
    </Wrapper>
  );
};
export default LabelSwitch;
