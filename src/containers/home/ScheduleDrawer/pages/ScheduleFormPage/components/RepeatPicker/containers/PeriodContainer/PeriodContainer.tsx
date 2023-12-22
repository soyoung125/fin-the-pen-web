import { SchedulePeriod } from "@type/schedule";
import { useState } from "react";
import { INIT_PERIOD } from "constants/schedule";
import moment from "moment";
import { UpdateStateInterface } from "@type/common";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm";
import EndDate from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/PeriodContainer/period/EndDate";
import RadioLabel from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/components/radio/RadioLabel";
import RepetitionCount from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/PeriodContainer/period/RepetitionCount";

interface PeriodTypeProps {
  periodType: string;
}

function PeriodContainer({ periodType }: PeriodTypeProps) {
  const { updatePeriod, scheduleForm } = useScheduleForm();
  const [period, setPeriod] = useState<SchedulePeriod>(
    INIT_PERIOD(moment(scheduleForm ? scheduleForm.start_date : "")),
  );

  const changePeriod = (state: UpdateStateInterface) => {
    updatePeriod(state);
    setPeriod((pre) => {
      return { ...pre, [state.target.id]: state.target.value };
    });
  };

  return (
    <>
      <RadioLabel value="is_repeat_again" label="계속 반복" />

      <RepetitionCount periodType={periodType} />

      <EndDate handleChangeOption={changePeriod} />
    </>
  );
}

export default PeriodContainer;
