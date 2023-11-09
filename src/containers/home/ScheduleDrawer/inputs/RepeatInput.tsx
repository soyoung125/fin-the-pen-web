import {
  // eslint-disable-next-line max-len
  Box,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSchedule } from "../../../../app/redux/slices/scheduleSlice";
import { updateRepeat } from "../domain/schedule";
import { useAppDispatch } from "../../../../app/redux/hooks";
import SwitchButton from "@components/common/SwitchButton";

function RepeatInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const [openDatePickerModal, setOpenDatePickerModal] = useState(false);

  const changeRepeat = (state: { target: { value: string; name: string } }) => {
    updateRepeat(dispatch, schedule, setOpenDatePickerModal, state);
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ color: "primary.main" }}>반복</Box>
        <SwitchButton
          checked={schedule?.repeat !== "none"}
          handleChange={() =>
            changeRepeat({
              target: {
                value: schedule?.repeat === "none" ? "yes" : "none",
                name: "repeat",
              },
            })
          }
        />
      </Stack>
    </>
  );
}

export default RepeatInput;
