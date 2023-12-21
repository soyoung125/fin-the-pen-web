import InputLabel from "../radio/RadioLabel/labels/InputLabel";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm";
import { useEffect, useState } from "react";

interface InputLabelProps {
  label: string;
  postInputLabel: string;
  max: number;
  option: "day" | "week" | "month" | "year";
  repeatType: string;
}

function RepeatInputLabel({
  label,
  postInputLabel,
  max,
  option,
  repeatType,
}: InputLabelProps) {
  const { scheduleForm, updateRepeat } = useScheduleForm();
  const type = `${option}_type` as const;
  const [value, setValue] = useState<string>(
    scheduleForm ? scheduleForm?.repeat[type].repeat_value : "1",
  );

  useEffect(() => {
    updateRepeat({ target: { id: "repeat_value", value: value } });
  }, [value]);

  const handleUpdate = (value: string) => setValue(value);

  return repeatType === option ? (
    <InputLabel
      value={value}
      handleUpdate={handleUpdate}
      postInputLabel={postInputLabel}
      max={max}
    />
  ) : (
    <>{label}</>
  );
}

export default RepeatInputLabel;
