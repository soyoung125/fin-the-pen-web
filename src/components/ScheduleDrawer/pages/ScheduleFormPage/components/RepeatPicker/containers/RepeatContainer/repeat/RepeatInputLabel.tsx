import InputLabel from "@components/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/radio/RadioLabel/labels/InputLabel.tsx";
import { useScheduleForm } from "../../../../../../../hooks/useScheduleForm.ts";

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
  const repeatValue = scheduleForm?.repeat[type].repeat_term;
  console.log(scheduleForm);

  const handleUpdate = (value: string) =>
    updateRepeat({ target: { id: "repeat_term", value: value } });

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
