import { Box, Collapse, Stack } from "@mui/material";
import SwitchButton from "@components/common/SwitchButton.tsx";
import RepeatRadioGroup from "./radio/RepeatRadioGroup.tsx";
import AllDay from "./repeat/AllDay.tsx";
import Week from "./repeat/Week";
import Month from "./repeat/Month";
import Year from "./repeat/Year";
import EndDate from "./period/EndDate";
import RadioLabel from "./radio/RadioLabel";
import RepetitionCount from "./period/RepetitionCount.tsx";
import ThickDivider from "@components/common/ThickDivider.tsx";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm.ts";

function RepeatInput() {
  const { updateRepeat, scheduleForm } = useScheduleForm();

  const changeRepeat = (state: { target: { value: string; name: string } }) => {
    updateRepeat(state);
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" sx={{ px: 2.5 }}>
        <Box sx={{ color: "primary.main" }}>반복</Box>
        <SwitchButton
          checked={scheduleForm?.repeat !== "None"}
          handleChange={() =>
            changeRepeat({
              target: {
                value: scheduleForm?.repeat === "None" ? "AllDay" : "None",
                name: "repeat",
              },
            })
          }
        />
      </Stack>
      <Collapse in={scheduleForm?.repeat !== "None"}>
        <RepeatRadioGroup type="repeat" handleChange={changeRepeat}>
          <>
            <AllDay />

            <Week />

            <Month />

            <Year />
          </>
        </RepeatRadioGroup>

        <ThickDivider />

        <Box sx={{ color: "primary.main" }} px={2}>
          기간
        </Box>
        <RepeatRadioGroup type="period" handleChange={changeRepeat}>
          <>
            <RadioLabel value="All" label="계속 반복" />

            <RepetitionCount />

            <EndDate />
          </>
        </RepeatRadioGroup>
      </Collapse>
    </>
  );
}

export default RepeatInput;
