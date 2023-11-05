import { Box, Input, InputAdornment, InputBase, Stack } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { useSelector } from "react-redux";
import { SCHEDULE_DRAWER } from "../../../../../constants/schedule";
import { selectSchedule } from "../../../../../app/redux/slices/scheduleSlice";
import { updateSchedule } from "../../domain/schedule";
import { useAppDispatch } from "../../../../../app/redux/hooks";
import SwitchButton from "@components/common/SwitchButton";
import { useState } from "react";
import CalenderBox from "@containers/home/HomeContainer/view/Calender/boxes/CalenderBox";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment";
import { UpdateStateInterface } from "@type/common";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import InputDateTime from "./InputDateTime";

function DateInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const changeSchedule = (
    state:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | UpdateStateInterface,
  ) => {
    updateSchedule(dispatch, schedule, state);
  };

  return (
    <>
      <InputDateTime
        date={schedule?.date}
        time={schedule?.start_time}
        handleClick={() => setShowStart(!showStart)}
        title={SCHEDULE_DRAWER.start_time}
        changeSchedule={changeSchedule}
        showCalendar={showStart}
      />

      <InputDateTime
        date={schedule?.date}
        time={schedule?.end_time}
        handleClick={() => setShowEnd(!showEnd)}
        title={SCHEDULE_DRAWER.end_time}
        changeSchedule={changeSchedule}
        showCalendar={showEnd}
      />

      <Stack direction="row" justifyContent="space-between">
        <Box>하루종일</Box>
        <SwitchButton
          checked={true}
          handleChange={() => console.log("toggle")}
        />
      </Stack>
    </>
  );
}
export default DateInput;
