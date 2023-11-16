import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSchedule } from "../../../../../app/redux/slices/scheduleSlice";
import { updateAllDay, updateSchedule } from "../../domain/schedule";
import { useAppDispatch } from "../../../../../app/redux/hooks";
import SwitchButton from "@components/common/SwitchButton";
import { useState } from "react";
import { UpdateStateInterface } from "@type/common";
import InputDateTime from "./InputDateTime";
import { SCHEDULE_DRAWER } from "constants/schedule";

interface DateInputProps {
  showError: boolean;
}
function DateInput({ showError }: DateInputProps) {
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

  const changeAllDay = (state: {
    target: { value: boolean; name: string };
  }) => {
    updateAllDay(dispatch, schedule, state);
  };

  return (
    <>
      <InputDateTime
        date={schedule?.start_date}
        time={schedule?.start_time}
        handleClick={() => setShowStart(!showStart)}
        changeSchedule={changeSchedule}
        showCalendar={showStart}
        type="start"
        showError={showError}
      />

      <InputDateTime
        date={schedule?.end_date}
        time={schedule?.end_time}
        handleClick={() => setShowEnd(!showEnd)}
        changeSchedule={changeSchedule}
        showCalendar={showEnd}
        type="end"
        showError={showError}
      />

      <Stack direction="row" justifyContent="space-between" pr={1}>
        <Box>{SCHEDULE_DRAWER.all_day}</Box>
        <SwitchButton
          checked={schedule?.all_day ?? true}
          handleChange={() =>
            changeAllDay({
              target: {
                value: !schedule?.all_day,
                name: "all_day",
              },
            })
          }
        />
      </Stack>
    </>
  );
}
export default DateInput;
