import { RepeatTypeProps } from "@app/types/schedule.ts";
import RadioLabel from "@components/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/radio/RadioLabel";
import RepeatInputLabel from "./RepeatInputLabel.tsx";

function AllDay({ repeatType }: RepeatTypeProps) {
  return (
    <RadioLabel
      value="day"
      label={
        <RepeatInputLabel
          label="매일"
          postInputLabel="일 마다"
          max={365}
          option="day"
          repeatType={repeatType}
        />
      }
    />
  );
}

export default AllDay;
