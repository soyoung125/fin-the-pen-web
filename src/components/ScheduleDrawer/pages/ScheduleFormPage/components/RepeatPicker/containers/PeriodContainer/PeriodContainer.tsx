import { useScheduleForm } from "../../../../../../hooks/useScheduleForm.ts";
import EndDate from "./period/EndDate";
import RadioLabel from "@components/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/radio/RadioLabel";
import RepetitionCount from "./period/RepetitionCount.tsx";
import RepeatRadioGroup from "@components/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/radio/RepeatRadioGroup.tsx";

interface PeriodContainerProps {
  periodType: string;
  handleChange: (value: string) => void;
}

function PeriodContainer({ periodType, handleChange }: PeriodContainerProps) {
  const { updatePeriod } = useScheduleForm();

  return (
    <RepeatRadioGroup value={periodType} handleChange={handleChange}>
      <RadioLabel value="is_repeat_again" label="계속 반복" />

      <RepetitionCount periodType={periodType} />

      <EndDate handleChangeOption={updatePeriod} />
    </RepeatRadioGroup>
  );
}

export default PeriodContainer;
