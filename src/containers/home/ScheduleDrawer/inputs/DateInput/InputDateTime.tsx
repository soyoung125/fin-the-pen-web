import { useAppDispatch } from "@app/redux/hooks";
import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import CalenderBox from "@containers/home/HomeContainer/view/Calender/boxes/CalenderBox";
import {
  Box,
  Collapse,
  InputAdornment,
  InputBase,
  Stack,
  TextField,
} from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { UpdateStateInterface } from "@type/common";
import { SCHEDULE_DRAWER } from "constants/schedule";
import moment from "moment";
import { useSelector } from "react-redux";
import { updateSchedule } from "../../domain/schedule";
import SelectTime from "./select/SelectTime";
import SelectDate from "./select/SelectDate";

interface InputDateTimeProps {
  date: string | undefined;
  time: string | undefined;
  handleClick: () => void;
  showCalendar: boolean;
  type: string;
  showError: boolean;
}

function InputDateTime({
  date,
  time,
  handleClick,
  showCalendar,
  type,
  showError,
}: InputDateTimeProps) {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const title = type === "start" ? SCHEDULE_DRAWER.start : SCHEDULE_DRAWER.end;

  const changeSchedule = (
    state:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | UpdateStateInterface,
  ) => {
    updateSchedule(dispatch, schedule, state);
  };
  return (
    <Box sx={{ px: 2.5 }}>
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
          endAdornment: !schedule?.all_day && (
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
        <SelectDate date={date} changeSchedule={changeSchedule} type={type} />

        <SelectTime />
      </Collapse>
    </Box>
  );
}

export default InputDateTime;
