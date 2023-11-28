import { useAppDispatch } from "@app/redux/hooks";
import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import {
  Box,
  Collapse,
  InputAdornment,
  InputBase,
  TextField,
} from "@mui/material";
import { UpdateStateInterface } from "@type/common";
import { SCHEDULE_DRAWER } from "constants/schedule";
import { useSelector } from "react-redux";
import { updateSchedule } from "../../domain/schedule";
import SelectTime from "./select/SelectTime";
import SelectDate from "./select/SelectDate";
import moment from "moment";
import "moment/dist/locale/ko";

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
              {/* <InputBase
                id={type + "_time"}
                type="time"
                value={time}
                onChange={changeSchedule}
                onClick={(e) => e.stopPropagation()}
                inputProps={{
                  style: { textAlign: "right" },
                }}
              /> */}
              <Box>{moment(time, "hh:mm").locale("ko").format("LT")}</Box>
            </InputAdornment>
          ),
        }}
        value={date}
        onChange={changeSchedule}
      />
      <Collapse in={showCalendar}>
        <SelectDate date={date} changeSchedule={changeSchedule} type={type} />

        <SelectTime time={time} changeSchedule={changeSchedule} type={type} />
      </Collapse>
    </Box>
  );
}

export default InputDateTime;
