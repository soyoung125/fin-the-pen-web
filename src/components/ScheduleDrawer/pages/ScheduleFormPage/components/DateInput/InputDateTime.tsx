import { Box, Grid, InputAdornment, Typography } from "@mui/material";
import { UpdateStateInterface } from "@app/types/common.ts";
import { SCHEDULE_DRAWER } from "@constants/schedule.ts";
import moment from "moment";
import "moment/dist/locale/ko";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useDatePicker } from "@hooks/date-picker/hooks/useDatePicker.tsx";
import { useScheduleForm } from "../../../../hooks/useScheduleForm.ts";
import SelectDateTime from "@components/ScheduleDrawer/pages/ScheduleFormPage/components/DateInput/select/SelectDateTime/SelectDateTime.tsx";

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
  const { openDayPicker, openTimePicker } = useDatePicker();

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
      <Typography variant="subtitle1" color="primary">
        {title}
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SelectDateTime
            dateTime={moment(date).format("YYYY/MM/DD dddd")}
            onClick={onClickDateField}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectDateTime
            dateTime={moment(time, "hh:mm").format("LT")}
            paddingLeft
            onClick={onClickTimeField}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default InputDateTime;
