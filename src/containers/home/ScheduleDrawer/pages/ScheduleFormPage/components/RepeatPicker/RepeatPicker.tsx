import { Dispatch, SetStateAction } from "react";
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
import { useSelector } from "react-redux";
import { selectRepeatType } from "@app/redux/slices/scheduleSlice";

export interface RepeatPickerProps {
  setIsRepeatPickerOpen: Dispatch<SetStateAction<boolean>>;
}

function RepeatPicker({ setIsRepeatPickerOpen }: RepeatPickerProps) {
  const repeatType = useSelector(selectRepeatType);
  const { updateRepeat, updatePeriod } = useScheduleForm();

  const changeRepeat = (state: UpdateStateInterface) => {
    updateRepeat(state);
  };

  const changePeriod = (state: UpdateStateInterface) => {
    updatePeriod(state);
  };

  return (
    <>
      <TopNavigationBar
        onClick={() => setIsRepeatPickerOpen(false)}
        title="반복 설정"
      />

      <RepeatInput />

      {repeatType !== "" && (
        <>
          <RepeatRadioGroup type="repeat" handleChange={changeRepeat}>
            <>
              <AllDay />

              <Week handleChangeOption={changeRepeat} />

              <Month handleChangeOption={changeRepeat} />

              <Year />
            </>
          </RepeatRadioGroup>

          <ThickDivider />

          <Box sx={{ color: "primary.main" }} px={2} py={2}>
            기간
          </Box>
          <RepeatRadioGroup type="period" handleChange={changePeriod}>
            <>
              <RadioLabel value="is_repeat_again" label="계속 반복" />

              <RepetitionCount />

              <EndDate handleChangeOption={changePeriod} />
            </>
          </RepeatRadioGroup>
        </>
      )}
    </>
  );
}

export default RepeatPicker;
