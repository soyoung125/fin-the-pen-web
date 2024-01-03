import { Box, InputAdornment } from "@mui/material";
import { UpdateStateInterface } from "@app/types/common.ts";
import { SCHEDULE_DRAWER } from "@constants/schedule.ts";
import moment from "moment";
import "moment/dist/locale/ko";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useDatePicker } from "@hooks/date-picker/hooks/useDatePicker.tsx";
import { useScheduleForm } from "../../../../hooks/useScheduleForm.ts";
import { useTimePicker } from "@hooks/date-picker/hooks/useTimePicker.tsx";

interface InputDateTimeProps {
  date?: string;
  time?: string;
  type: InputDateTimeType;
  showError: boolean;
}

export type InputDateTimeType = "start" | "end";

function InputDateTime({ date, time, type, showError }: InputDateTimeProps) {
  const { scheduleForm, updateSchedule } = useScheduleForm();

  const title = SCHEDULE_DRAWER[type];
  const { openDayPicker } = useDatePicker();
  const { openTimePicker } = useTimePicker();

  const changeSchedule = (state: UpdateStateInterface) => {
    updateSchedule(state);
  };

  const onClickDateField = async () => {
    const date = await openDayPicker();
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
    const newTime = await openTimePicker({
      defaultTime: time as string,
    });
    if (newTime) {
      changeSchedule({
        target: {
          id: type + "_time",
          value: newTime,
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
            endAdornment: !scheduleForm?.all_day && (
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
