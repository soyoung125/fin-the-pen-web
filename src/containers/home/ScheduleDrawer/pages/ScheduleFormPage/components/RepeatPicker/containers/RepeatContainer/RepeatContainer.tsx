import { RepeatTypeProps } from "@type/schedule";
import AllDay from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/repeat/AllDay";
import Week from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/repeat/Week";
import Month from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/repeat/Month";
import Year from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/repeat/Year";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm";

function RepeatContainer({ repeatType }: RepeatTypeProps) {
  const { updateRepeat } = useScheduleForm();

  return (
    <>
      <AllDay repeatType={repeatType} />

      <Week repeatType={repeatType} handleChangeOption={updateRepeat} />

      <Month repeatType={repeatType} handleChangeOption={updateRepeat} />

      <Year repeatType={repeatType} />
    </>
  );
}

export default RepeatContainer;
