import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm";
import EndDate from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/PeriodContainer/period/EndDate";
import RadioLabel from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/components/radio/RadioLabel";
import RepetitionCount from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/PeriodContainer/period/RepetitionCount";
import RepeatRadioGroup from "../../components/radio/RepeatRadioGroup";

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
