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

  const repeatType = scheduleForm?.repeat.kind_type ?? "day";
  const periodType = scheduleForm?.period.kind_type ?? "is_repeat_again";

  const handleRepeatChange = (v: string) => {
    updateRepeat({ target: { id: "repeat", value: v } });
  };

  const handlePeriodChange = (v: string) => {
    updatePeriod({ target: { id: "period", value: v } });
  };

  return (
    <>
      <TopNavigationBar
        onClick={() => setIsRepeatPickerOpen(false)}
        title="반복 설정"
      />

      <RepeatInput repeatType={repeatType} handleChange={handleRepeatChange} />

      {repeatType !== "none" && (
        <>
          <RepeatContainer
            repeatType={repeatType}
            handleChange={handleRepeatChange}
          />

          <ThickDivider />

          <Box sx={{ color: "primary.main" }} px={2} py={2}>
            기간
          </Box>
          <PeriodContainer
            periodType={periodType}
            handleChange={handlePeriodChange}
          />
        </>
      )}
    </>
  );
}

export default RepeatPicker;
