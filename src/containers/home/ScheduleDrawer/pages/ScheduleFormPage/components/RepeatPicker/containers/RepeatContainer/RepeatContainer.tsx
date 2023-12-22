import AllDay from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/repeat/AllDay";
import Week from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/repeat/Week";
import Month from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/repeat/Month";
import Year from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/repeat/Year";
import RepeatRadioGroup from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components//RepeatPicker/components/radio/RepeatRadioGroup";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm";
import { RepeatTypeProps } from "@type/schedule";

interface RepeatContainerProps extends RepeatTypeProps {
  handleChange: (value: string) => void;
}

function RepeatContainer({ repeatType, handleChange }: RepeatContainerProps) {
  const { updateRepeat } = useScheduleForm();

  return (
    <RepeatRadioGroup value={repeatType} handleChange={handleChange}>
      <AllDay repeatType={repeatType} />

      <Week repeatType={repeatType} handleChangeOption={updateRepeat} />

      <Month repeatType={repeatType} handleChangeOption={updateRepeat} />

      <Year repeatType={repeatType} />
    </RepeatRadioGroup>
  );
}

export default RepeatContainer;
