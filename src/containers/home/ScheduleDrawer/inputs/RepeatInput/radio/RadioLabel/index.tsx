import RadioButton from "@components/common/RadioButton";
import { FormControlLabel, Divider } from "@mui/material";

interface RadioLabelProps {
  value: string;
  label: JSX.Element | string;
}

function RadioLabel({ value, label }: RadioLabelProps) {
  return (
    <>
      <FormControlLabel
        control={<RadioButton value={value} />}
        label={label}
        sx={{ px: 2.5 }}
      />

      <Divider />
    </>
  );
}

export default RadioLabel;
