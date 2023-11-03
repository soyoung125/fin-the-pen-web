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
      <Box>
        <Input
          // type="date"
          onClick={() => setShowStart(!showStart)}
          id="date"
          startAdornment={
            <InputAdornment position="start">
              <Box sx={{ color: "primary.main", fontWeight: 500 }}>
                {SCHEDULE_DRAWER.start_time}
              </Box>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="start">
              <InputBase
                id="start_time"
                type="time"
                value={schedule?.start_time}
                onChange={changeSchedule}
                onClick={(e) => e.stopPropagation()}
                inputProps={{
                  style: { textAlign: "right" },
                }}
              />
            </InputAdornment>
          }
          value={schedule?.date}
          onChange={changeSchedule}
        />
        <Collapse in={showStart}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <CalenderBox dateHeight={50} dateSize={32} week={6}>
              <DateCalendar
                views={["year", "month", "day"]}
                disableHighlightToday
                dayOfWeekFormatter={(day) => day.substring(0, 3)}
                value={moment(schedule?.date)}
                onChange={(newValue) => {
                  newValue &&
                    changeSchedule({
                      target: {
                        id: "date",
                        value: newValue.format("YYYY-MM-DD"),
                      },
                    });
                }}
                reduceAnimations
              />
            </CalenderBox>
          </LocalizationProvider>
        </Collapse>
      </Box>

      <Input
        type="date"
        id="date"
        startAdornment={
          <InputAdornment position="start">
            <Box sx={{ color: "primary.main", fontWeight: 500 }}>
              {SCHEDULE_DRAWER.end_time}
            </Box>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="start">
            <InputBase
              id="end_time"
              type="time"
              value={schedule?.end_time}
              onChange={changeSchedule}
              inputProps={{
                style: { textAlign: "right" },
              }}
            />
          </InputAdornment>
        }
        value={schedule?.date}
        onChange={changeSchedule}
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
