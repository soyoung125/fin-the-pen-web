import { Box, Collapse, Stack, Input } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import SwitchButton from "@components/common/SwitchButton";
import { useAppDispatch } from "@app/redux/hooks";
import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { updateRepeat } from "../../domain/schedule";
import RepeatRadioGroup from "./radio/RepeatRadioGroup";
import AllDay from "./repeat/AllDay";
import Week from "./repeat/Week";
import Month from "./repeat/Month";
import Year from "./repeat/Year";
import EndDate from "./period/EndDate";
import RadioLabel from "./radio/RadioLabel";
import RepetitionCount from "./period/RepetitionCount";
import ThickDivider from "@components/common/ThickDivider";

function RepeatInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const [openDatePickerModal, setOpenDatePickerModal] = useState(false);

  const changeRepeat = (state: { target: { value: string; name: string } }) => {
    updateRepeat(dispatch, schedule, setOpenDatePickerModal, state);
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
