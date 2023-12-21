import { Dispatch, SetStateAction, useEffect, useState } from "react";
import TopNavigationBar from "@components/layouts/common/TopNavigationBar";
import RepeatRadioGroup from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/radio/RepeatRadioGroup";
import AllDay from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/repeat/AllDay";
import Week from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/repeat/Week";
import Month from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/repeat/Month";
import Year from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/repeat/Year";
import EndDate from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/period/EndDate";
import RadioLabel from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/radio/RadioLabel";
import RepetitionCount from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/period/RepetitionCount";
import ThickDivider from "@components/common/ThickDivider";
import RepeatInput from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatInput";
import { Box } from "@mui/material";
import { UpdateStateInterface } from "@type/common";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm";
import { INIT_PERIOD, INIT_REPEAT } from "constants/schedule";
import { SchedulePeriod, ScheduleRepeat } from "@type/schedule";
import moment from "moment";

export interface RepeatPickerProps {
  setIsRepeatPickerOpen: Dispatch<SetStateAction<boolean>>;
}

function RepeatPicker({ setIsRepeatPickerOpen }: RepeatPickerProps) {
  const { updateRepeat, updatePeriod, scheduleForm } = useScheduleForm();
  const [repeatType, setRepeatType] = useState<string>(
    scheduleForm ? scheduleForm.repeat.kind_type : "",
  );
  const [repeat, setRepeat] = useState<ScheduleRepeat>(
    INIT_REPEAT(moment(scheduleForm ? scheduleForm.start_date : "")),
  );
  const [periodType, setPeriodType] = useState<string>(
    scheduleForm ? scheduleForm.repeat.kind_type : "",
  );
  const [period, setPeriod] = useState<SchedulePeriod>(
    INIT_PERIOD(moment(scheduleForm ? scheduleForm.start_date : "")),
  );

  useEffect(() => {
    console.log(repeatType);
    updateRepeat({ target: { id: "repeat", value: repeatType } });
  }, [repeatType]);

  useEffect(() => {
    updatePeriod({ target: { id: "period", value: periodType } });
  }, [periodType]);

  const changeRepeat = (state: UpdateStateInterface) => {
    updateRepeat(state);
    setRepeat((pre) => {
      return { ...pre, [state.target.id]: state.target.value };
    });
  };

  const changePeriod = (state: UpdateStateInterface) => {
    updatePeriod(state);
    setPeriod((pre) => {
      return { ...pre, [state.target.id]: state.target.value };
    });
  };

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
            <AllDay repeatType={repeatType} />

            <Week repeatType={repeatType} handleChangeOption={changeRepeat} />

            <Month repeatType={repeatType} handleChangeOption={changeRepeat} />

            <Year repeatType={repeatType} />
          </RepeatRadioGroup>

          <ThickDivider />

          <Box sx={{ color: "primary.main" }} px={2} py={2}>
            기간
          </Box>
          <RepeatRadioGroup
            value={periodType}
            handleChange={(v: string) => setPeriodType(v)}
          >
            <RadioLabel value="is_repeat_again" label="계속 반복" />

            <RepetitionCount periodType={periodType} />

            <EndDate handleChangeOption={changePeriod} />
          </RepeatRadioGroup>
        </>
      )}
    </>
  );
}

export default RepeatPicker;
