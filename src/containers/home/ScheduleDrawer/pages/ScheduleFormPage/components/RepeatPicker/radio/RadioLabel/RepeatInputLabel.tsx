import {
  selectRepeatType,
  selectSchedule,
} from "@app/redux/slices/scheduleSlice";
import { useSelector } from "react-redux";
import InputLabel from "./InputLabel";

interface InputLabelProps {
  label: string;
  postInputLabel: string;
  max: number;
  option: "day" | "week" | "month" | "year";
}

function RepeatInputLabel({
  label,
  postInputLabel,
  max,
  option,
}: InputLabelProps) {
  const schedule = useSelector(selectSchedule);
  const repeatType = useSelector(selectRepeatType);
  const type = `${option}_type` as const;

  return repeatType === option ? (
    <InputLabel
      id="repeat_value"
      value={schedule?.repeat[type].repeat_value}
      type="repeat"
      postInputLabel={postInputLabel}
      max={max}
    />
  ) : (
    <>{label}</>
  );
}

export default RepeatInputLabel;
