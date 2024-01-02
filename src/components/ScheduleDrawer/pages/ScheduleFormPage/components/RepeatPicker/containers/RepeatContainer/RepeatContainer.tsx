import AllDay from "./repeat/AllDay.tsx";
import Week from "./repeat/Week";
import Month from "./repeat/Month";
import Year from "./repeat/Year";
import { useScheduleForm } from "../../../../../../hooks/useScheduleForm.ts";
import { RepeatTypeProps } from "@app/types/schedule.ts";
import RepeatRadioGroup from "./radio/RepeatRadioGroup.tsx";

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
