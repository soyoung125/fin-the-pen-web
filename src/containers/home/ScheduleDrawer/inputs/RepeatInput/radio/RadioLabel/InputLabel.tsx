import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { Input } from "@mui/material";
import { useSelector } from "react-redux";

interface InputLabelProps {
  label: string;
  preInputLabel?: string;
  postInputLabel: string;
  max: number;
  type: "repeat" | "period";
  option: string;
}

function InputLabel({
  label,
  preInputLabel,
  postInputLabel,
  max,
  type,
  option,
}: InputLabelProps) {
  const schedule = useSelector(selectSchedule);

  return schedule?.[type] === option ? (
    <>
      {preInputLabel}
      <Input
        defaultValue={1}
        type="number"
        inputProps={{
          min: 1,
          max: max,
        }}
        sx={{ width: "30px" }}
      />
      {postInputLabel}
    </>
  ) : (
    <>{label}</>
  );
}

export default InputLabel;
