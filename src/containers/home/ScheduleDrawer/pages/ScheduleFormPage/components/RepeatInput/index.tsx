import { Box, Collapse, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import SwitchButton from "@components/common/SwitchButton";
import { selectRepeatType } from "@app/redux/slices/scheduleSlice";
import RepeatRadioGroup from "./radio/RepeatRadioGroup";
import AllDay from "./repeat/AllDay";
import Week from "./repeat/Week";
import Month from "./repeat/Month";
import Year from "./repeat/Year";
import EndDate from "./period/EndDate";
import RadioLabel from "./radio/RadioLabel";
import RepetitionCount from "./period/RepetitionCount";
import ThickDivider from "@components/common/ThickDivider";
import { UpdateStateInterface } from "@type/common";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm.ts";

function RepeatInput() {
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
      <Stack direction="row" justifyContent="space-between" sx={{ px: 2.5 }}>
        <Box sx={{ color: "primary.main" }}>반복</Box>
        <SwitchButton
          checked={repeatType !== ""}
          handleChange={() =>
            changeRepeat({
              target: {
                value: repeatType === "" ? "day" : "",
                id: "repeat",
              },
            })
          }
        />
      </Stack>
      <Collapse in={repeatType !== ""}>
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
      </Collapse>
    </>
  );
}

export default RepeatInput;
