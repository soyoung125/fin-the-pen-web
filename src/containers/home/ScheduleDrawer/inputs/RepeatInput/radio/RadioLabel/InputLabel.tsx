import { useAppDispatch } from "@app/redux/hooks";
import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import {
  updatePeriod,
  updateRepeat,
} from "@containers/home/ScheduleDrawer/domain/schedule";
import { Input } from "@mui/material";
import { UpdateStateInterface } from "@type/common";
import { useSelector } from "react-redux";

interface InputLabelProps {
  id: string;
  value: string | undefined;
  type: "repeat" | "period";
  preInputLabel?: string;
  postInputLabel: string;
  max: number;
}

function InputLabel({
  id,
  value,
  type,
  preInputLabel,
  postInputLabel,
  max,
}: InputLabelProps) {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const handleUpdate = (e: UpdateStateInterface) => {
    switch (type) {
      case "repeat":
        updateRepeat(dispatch, schedule, e);
        break;
      case "period":
        updatePeriod(dispatch, schedule, e);
        break;
      default:
        break;
    }
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

  return (
    <>
      {preInputLabel}
      <Input
        id={id}
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
