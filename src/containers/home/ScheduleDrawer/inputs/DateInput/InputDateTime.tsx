import { useAppDispatch } from "@app/redux/hooks";
import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { Box, InputAdornment } from "@mui/material";
import { UpdateStateInterface } from "@type/common";
import { SCHEDULE_DRAWER } from "constants/schedule";
import { useSelector } from "react-redux";
import { updateSchedule } from "../../domain/schedule";
import moment from "moment";
import "moment/dist/locale/ko";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useDatePicker } from "@components/layouts/date-picker/hooks/useDatePicker.tsx";

interface InputDateTimeProps {
  date: string | undefined;
  time: string | undefined;
  type: InputDateTimeType;
  showError: boolean;
}

export type InputDateTimeType = "start" | "end";

function InputDateTime({ date, time, type, showError }: InputDateTimeProps) {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const title = SCHEDULE_DRAWER[type];
  const { pickHHMM, pickYYYYMMDD } = useDatePicker();

  const changeSchedule = (state: UpdateStateInterface) => {
    updateSchedule(dispatch, schedule, state);
  };

  const onClickDateField = async () => {
    const date = await pickYYYYMMDD();
    if (date) {
      changeSchedule({
        target: {
          id: type + "_date",
          value: date,
        },
      });
    }
  };

  const onClickTimeField = async () => {
    const time = await pickHHMM();
    if (time) {
      changeSchedule({
        target: {
          id: type + "_time",
          value: time,
        },
      });
    }
  };

  return (
    <Box sx={{ px: 2.5 }}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateField
          onClick={onClickDateField}
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
                    onClickTimeField();
                  }}
                >
                  {moment(time, "hh:mm").format("LT")}
                </Box>
              </InputAdornment>
            ),
          }}
          value={moment(date)}
        />
      </LocalizationProvider>
    </Box>
  );
}

export default InputDateTime;
