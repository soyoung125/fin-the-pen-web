import RadioLabel from "@components/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/radio/RadioLabel";
import InputLabel from "@components/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/radio/RadioLabel/labels/InputLabel.tsx";
import { useScheduleForm } from "../../../../../../../hooks/useScheduleForm.ts";

export interface RepetitionCountProps {
  periodType: string;
}

function RepetitionCount({ periodType }: RepetitionCountProps) {
  const { scheduleForm, updatePeriod } = useScheduleForm();
  const value = scheduleForm?.period.repeat_number_time;

  const handleUpdate = (value: string) =>
    updatePeriod({ target: { id: "repeat_number_time", value: value } });

  return (
    <RadioLabel
      value="repeat_number_time"
      label={
        periodType === "repeat_number_time" ? (
          <InputLabel
            preInputLabel="총"
            postInputLabel="번 반복"
            max={100}
            handleUpdate={handleUpdate}
            value={value}
          />
        ) : (
          <>일정 반복 횟수</>
        )
      }
    />
  );
}

export default RepetitionCount;
