import { RadioGroup } from "@mui/material";

export interface RepeatRadioGroupProps {
  value: string;
  handleChange: (value: string) => void;
  children: JSX.Element[];
}

function RepeatRadioGroup({
  value,
  handleChange,
  children,
}: RepeatRadioGroupProps) {
  return (
    <RadioGroup value={value} onChange={(e) => handleChange(e.target.value)}>
      {children}
    </RadioGroup>
  );
}

export default RepeatRadioGroup;
