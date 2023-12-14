import { useAppDispatch } from "@app/redux/hooks";
import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { updateRepeat } from "@containers/home/ScheduleDrawer/domain/schedule";
import { Input } from "@mui/material";
import { UpdateStateInterface } from "@type/common";
import { useSelector } from "react-redux";

interface InputLabelProps {
  label: string;
  preInputLabel?: string;
  postInputLabel: string;
  max: number;
  option: "day" | "week" | "month" | "year";
}

function InputLabel({
  label,
  preInputLabel,
  postInputLabel,
  max,
  option,
}: InputLabelProps) {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const type = `${option}_type` as const;

  const handleUpdate = (e: UpdateStateInterface) => {
    updateRepeat(dispatch, schedule, e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, max } = e.target;
    let newValue = value;
    if (Number(newValue) > Number(max)) newValue = max;
    handleUpdate({ target: { id: id, value: newValue } });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value, min } = e.target;
    let newValue = value;
    if (Number(newValue) < Number(min)) newValue = min;
    handleUpdate({ target: { id: id, value: newValue.toString() } });
  };

  return schedule?.repeat.kind_type === option ? (
    <>
      {preInputLabel}
      <Input
        id="repeat_value"
        value={schedule?.repeat[type].repeat_value}
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
  ) : (
    <>{label}</>
  );
}

export default InputLabel;
