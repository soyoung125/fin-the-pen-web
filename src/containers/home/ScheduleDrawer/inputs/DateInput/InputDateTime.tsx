import CalenderBox from "@containers/home/HomeContainer/view/Calender/boxes/CalenderBox";
import {
  Box,
  Collapse,
  InputAdornment,
  InputBase,
  TextField,
} from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { UpdateStateInterface } from "@type/common";
import { SCHEDULE_DRAWER } from "constants/schedule";
import moment from "moment";

interface InputDateTimeProps {
  date: string | undefined;
  time: string | undefined;
  handleClick: () => void;
  changeSchedule: (
    state:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | UpdateStateInterface,
  ) => void;
  showCalendar: boolean;
  type: string;
  showError: boolean;
}

function InputDateTime({
  date,
  time,
  handleClick,
  changeSchedule,
  showCalendar,
  type,
  showError,
}: InputDateTimeProps) {
  const title = type === "start" ? SCHEDULE_DRAWER.start : SCHEDULE_DRAWER.end;
  return (
    <Box>
      <TextField
        fullWidth
        onClick={handleClick}
        id={type + "_date"}
        variant="standard"
        error={showError && date === ""}
        helperText={showError && date === "" ? "필수 입력 값입니다!" : ""}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box sx={{ color: "primary.main", fontWeight: 500 }}>{title}</Box>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <InputBase
                id={type + "_time"}
                type="time"
                value={time}
                onChange={changeSchedule}
                onClick={(e) => e.stopPropagation()}
                inputProps={{
                  style: { textAlign: "right" },
                }}
              />
            </InputAdornment>
          ),
        }}
        value={date}
        onChange={changeSchedule}
      />
      <Collapse in={showCalendar}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <CalenderBox dateHeight={50} dateSize={32} week={6}>
            <DateCalendar
              views={["year", "month", "day"]}
              disableHighlightToday
              dayOfWeekFormatter={(day) => day.substring(0, 3)}
              value={moment(date)}
              maxDate={moment().add(18, "M")}
              minDate={moment().subtract(18, "M")}
              onChange={(newValue) => {
                newValue &&
                  changeSchedule({
                    target: {
                      id: type + "_date",
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
  );
}

export default InputDateTime;
