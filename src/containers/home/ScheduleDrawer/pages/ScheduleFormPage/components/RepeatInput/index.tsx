import { Box, Collapse, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import SwitchButton from "@components/common/SwitchButton.tsx";
import { useAppDispatch } from "@redux/hooks.ts";
import { selectSchedule } from "@redux/slices/scheduleSlice.tsx";
import { updateRepeat } from "../../../../domain/schedule.ts";
import RepeatRadioGroup from "./radio/RepeatRadioGroup.tsx";
import AllDay from "./repeat/AllDay.tsx";
import Week from "./repeat/Week";
import Month from "./repeat/Month";
import Year from "./repeat/Year";
import EndDate from "./period/EndDate";
import RadioLabel from "./radio/RadioLabel";
import RepetitionCount from "./period/RepetitionCount.tsx";
import ThickDivider from "@components/common/ThickDivider.tsx";

function RepeatInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const changeRepeat = (state: { target: { value: string; name: string } }) => {
    updateRepeat(dispatch, schedule, state);
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" sx={{ px: 2.5 }}>
        <Box sx={{ color: "primary.main" }}>반복</Box>
        <SwitchButton
          checked={schedule?.repeat !== "None"}
          handleChange={() =>
            changeRepeat({
              target: {
                value: schedule?.repeat === "None" ? "AllDay" : "None",
                name: "repeat",
              },
            })
          }
        />
      </Stack>
      <Collapse in={schedule?.repeat !== "None"}>
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
