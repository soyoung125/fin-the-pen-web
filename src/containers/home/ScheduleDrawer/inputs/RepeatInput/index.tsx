import { Box, Collapse, Stack } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import SwitchButton from "@components/common/SwitchButton";
import { useAppDispatch } from "@app/redux/hooks";
import {
  selectRepeatType,
  selectSchedule,
} from "@app/redux/slices/scheduleSlice";
import { updateRepeat, updateSchedule } from "../../domain/schedule";
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

function RepeatInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const repeatType = useSelector(selectRepeatType);

  const changeRepeat = (state: UpdateStateInterface) => {
    updateRepeat(dispatch, schedule, state);
  };

  const changePeriod = (state: UpdateStateInterface) => {
    updateSchedule(dispatch, schedule, state);
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

            <Week changeRepeat={changeRepeat} />

            <Month changeRepeat={changeRepeat} />

            <Year />
          </>
        </RepeatRadioGroup>

        <ThickDivider />

        <Box sx={{ color: "primary.main" }} px={2}>
          기간
        </Box>
        <RepeatRadioGroup type="period" handleChange={changePeriod}>
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
