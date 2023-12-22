import { Dispatch, SetStateAction, useEffect, useState } from "react";
import TopNavigationBar from "@components/layouts/common/TopNavigationBar";
import RepeatRadioGroup from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/components/radio/RepeatRadioGroup";
import ThickDivider from "@components/common/ThickDivider";
import RepeatInput from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatInput";
import { Box } from "@mui/material";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm";
import RepeatContainer from "./containers/RepeatContainer/RepeatContainer";
import PeriodContainer from "./containers/PeriodContainer/PeriodContainer";

export interface RepeatPickerProps {
  setIsRepeatPickerOpen: Dispatch<SetStateAction<boolean>>;
}

function RepeatPicker({ setIsRepeatPickerOpen }: RepeatPickerProps) {
  const { updateRepeat, updatePeriod, scheduleForm } = useScheduleForm();
  const [repeatType, setRepeatType] = useState<string>(
    scheduleForm ? scheduleForm.repeat.kind_type : "",
  );
  const [periodType, setPeriodType] = useState<string>(
    scheduleForm ? scheduleForm.repeat.kind_type : "",
  );

  useEffect(() => {
    console.log(repeatType);
    updateRepeat({ target: { id: "repeat", value: repeatType } });
  }, [repeatType]);

  useEffect(() => {
    updatePeriod({ target: { id: "period", value: periodType } });
  }, [periodType]);

  return (
    <>
      <TopNavigationBar
        onClick={() => setIsRepeatPickerOpen(false)}
        title="반복 설정"
      />

      <RepeatInput
        repeatType={repeatType}
        handleChange={(v) => setRepeatType(v)}
      />

      {repeatType !== "" && (
        <>
          <RepeatRadioGroup
            value={repeatType}
            handleChange={(v) => setRepeatType(v)}
          >
            <RepeatContainer repeatType={repeatType} />
          </RepeatRadioGroup>

          <ThickDivider />

          <Box sx={{ color: "primary.main" }} px={2} py={2}>
            기간
          </Box>
          <RepeatRadioGroup
            value={periodType}
            handleChange={(v: string) => setPeriodType(v)}
          >
            <PeriodContainer periodType={periodType} />
          </RepeatRadioGroup>
        </>
      )}
    </>
  );
}

export default RepeatPicker;
