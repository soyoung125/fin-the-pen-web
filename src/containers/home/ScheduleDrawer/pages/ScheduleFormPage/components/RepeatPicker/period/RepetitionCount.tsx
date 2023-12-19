import { useSelector } from "react-redux";
import RadioLabel from "../radio/RadioLabel";
import InputLabel from "../radio/RadioLabel/InputLabel";
import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { Input } from "@mui/material";

function RepetitionCount() {
  const schedule = useSelector(selectSchedule);

  return (
    <RadioLabel
      value="repeat_number_time"
      label={
        schedule?.period.kind_type === "repeat_number_time" ? (
          <InputLabel
            preInputLabel="총"
            postInputLabel="번 반복"
            max={100}
            type="period"
            id="repeat_number_time"
            value={schedule.period.repeat_number_time}
          />
        ) : (
          <>일정 반복 횟수</>
        )
      }
    />
  );
}

export default RepetitionCount;
