import InputLabel from "../../../components/radio/RadioLabel/labels/InputLabel";
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
  const repeatValue = scheduleForm?.repeat[type].repeat_value;

  const handleUpdate = (value: string) =>
    updateRepeat({ target: { id: "repeat_value", value: value } });

  return repeatType === option ? (
    <InputLabel
      value={repeatValue}
      handleUpdate={handleUpdate}
      postInputLabel={postInputLabel}
      max={max}
    />
  ) : (
    <>{label}</>
  );
}

export default RepeatInputLabel;
