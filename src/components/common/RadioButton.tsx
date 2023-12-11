import { Radio } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

interface RadioButtonProps {
  value: string;
}

function RadioButton({ value }: RadioButtonProps) {
  return (
    <Radio
      icon={<CheckCircleOutlineRoundedIcon />}
      checkedIcon={<CheckCircleRoundedIcon />}
      value={value}
    />
  );
}

export default RadioButton;
