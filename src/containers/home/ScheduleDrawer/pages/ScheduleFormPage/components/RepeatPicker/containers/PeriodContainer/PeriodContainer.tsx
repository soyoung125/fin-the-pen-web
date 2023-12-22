import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm";
import EndDate from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/PeriodContainer/period/EndDate";
import RadioLabel from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/components/radio/RadioLabel";
import RepetitionCount from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/PeriodContainer/period/RepetitionCount";

interface PeriodTypeProps {
  periodType: string;
}

function PeriodContainer({ periodType }: PeriodTypeProps) {
  const { updatePeriod } = useScheduleForm();

  return (
    <>
      <RadioLabel value="is_repeat_again" label="계속 반복" />

      <RepetitionCount periodType={periodType} />

      <EndDate handleChangeOption={updatePeriod} />
    </>
  );
}

export default PeriodContainer;
