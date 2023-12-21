import { Input } from "@mui/material";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm.ts";

interface InputLabelProps {
  value: string | undefined;
  handleUpdate: (value: string) => void;
  preInputLabel?: string;
  postInputLabel: string;
  max: number;
}

function InputLabel({
  value,
  handleUpdate,
  preInputLabel,
  postInputLabel,
  max,
}: InputLabelProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, max } = e.target;
    let newValue = value;
    if (Number(newValue) > Number(max)) newValue = max;
    handleUpdate(newValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, min } = e.target;
    let newValue = value;
    if (Number(newValue) < Number(min)) newValue = min;
    handleUpdate(newValue);
  };

  return (
    <>
      {preInputLabel}
      <Input
        value={value}
        type="number"
        inputProps={{
          min: 1,
          max: max,
          style: { textAlign: "center" },
        }}
        sx={{
          width: "30px",
          color: "primary.main",
        }}
        color="primary"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {postInputLabel}
    </>
  );
}

export default InputLabel;
