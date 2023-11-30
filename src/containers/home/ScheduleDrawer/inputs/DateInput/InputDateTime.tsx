import { useAppDispatch } from "@app/redux/hooks";
import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { Box, Collapse, InputAdornment } from "@mui/material";
import { UpdateStateInterface } from "@type/common";
import { SCHEDULE_DRAWER } from "constants/schedule";
import { useSelector } from "react-redux";
import { updateSchedule } from "../../domain/schedule";
import SelectTime from "./select/SelectTime";
import SelectDate from "./select/SelectDate";
import moment from "moment";
import "moment/dist/locale/ko";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

interface InputDateTimeProps {
  date: string | undefined;
  time: string | undefined;
  handleClick: (type: string, selectType: string) => void;
  showCalendar: string;
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

  const changeSchedule = (state: UpdateStateInterface) => {
    updateSchedule(dispatch, schedule, state);
  };

  return (
    <Box sx={{ px: 2.5 }}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateField
          onClick={() => handleClick(type, "date")}
          fullWidth
          variant="standard"
          format="YYYY-MM-DD"
          maxDate={moment().add(18, "M")}
          minDate={moment().subtract(18, "M")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box sx={{ color: "primary.main", fontWeight: 500 }}>
                  {title}
                </Box>
              </InputAdornment>
            ),
            endAdornment: !schedule?.all_day && (
              <InputAdornment position="start">
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(type, "time");
                  }}
                />
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(type, "time");
                  }}
                >
                  {moment(time, "hh:mm").format("LT")}
                </Box>
              </InputAdornment>
            ),
          }}
          value={moment(date)}
          onChange={(value, context) =>
            context.validationError === null &&
            value &&
            changeSchedule({
              target: {
                id: type + "_date",
                value: value.format("YYYY-MM-DD"),
              },
            })
          }
          onSelectedSectionsChange={(newValue) => console.log(1, newValue)}
        />

        <Collapse in={showCalendar !== ""}>
          {showCalendar === "date" && (
            <SelectDate
              date={date}
              changeSchedule={changeSchedule}
              type={type}
            />
          )}
          {showCalendar === "time" && (
            <SelectTime
              time={time}
              changeSchedule={changeSchedule}
              type={type}
            />
          )}
        </Collapse>
      </LocalizationProvider>
    </Box>
  );
}

export default InputDateTime;
