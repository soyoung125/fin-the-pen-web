import {
  // eslint-disable-next-line max-len
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import {
  LocalizationProvider,
  PickersDay,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import { DEADLINE, REPEAT } from "../../../../constants/repeat";
import { SCHEDULE_DRAWER } from "../../../../constants/schedule";
import {
  selectSchedule,
  setDrawerSchedule,
} from "../../../../app/redux/slices/scheduleSlice";
import { updateRepeat, updateRepeatEndDate } from "../domain/schedule";
import { RenderDayFunction } from "../../../../types/common";
import { useAppDispatch } from "../../../../app/redux/hooks";
import SwitchButton from "@components/common/SwitchButton";

function RepeatInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const [openDatePickerModal, setOpenDatePickerModal] = useState(false);

  const changeRepeat = (
    state:
      | SelectChangeEvent<string>
      | { target: { value: string; name: string } },
  ) => {
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
                value: "repeat",
                name: schedule?.repeat === "none" ? "" : "none",
              },
            })
          }
        />
      </Stack>
    </>
  );
}

export default RepeatInput;
