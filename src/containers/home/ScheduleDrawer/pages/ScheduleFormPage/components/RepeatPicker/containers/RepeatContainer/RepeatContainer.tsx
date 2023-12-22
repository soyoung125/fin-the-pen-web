import { RepeatTypeProps, ScheduleRepeat } from "@type/schedule";
import AllDay from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/repeat/AllDay";
import Week from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/repeat/Week";
import Month from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/repeat/Month";
import Year from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/repeat/Year";
import { useState } from "react";
import { INIT_REPEAT } from "constants/schedule";
import moment from "moment";
import { UpdateStateInterface } from "@type/common";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm";

function RepeatContainer({ repeatType }: RepeatTypeProps) {
  const { updateRepeat, scheduleForm } = useScheduleForm();
  const [repeat, setRepeat] = useState<ScheduleRepeat>(
    INIT_REPEAT(moment(scheduleForm ? scheduleForm.start_date : "")),
  );

  const changeRepeat = (state: UpdateStateInterface) => {
    updateRepeat(state);
    setRepeat((pre) => {
      return { ...pre, [state.target.id]: state.target.value };
    });
  };
  return (
    <>
      <AllDay repeatType={repeatType} />

      <Week repeatType={repeatType} handleChangeOption={changeRepeat} />

      <Month repeatType={repeatType} handleChangeOption={changeRepeat} />

      <Year repeatType={repeatType} />
    </>
  );
}

export default RepeatContainer;
