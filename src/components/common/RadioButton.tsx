import { Radio } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
function RadioButton() {
  return (
    <Radio
      icon={<CheckCircleOutlineRoundedIcon />}
      checkedIcon={<CheckCircleRoundedIcon />}
    />
  );
}

export default RadioButton;
