import { useAppDispatch } from "@app/redux/hooks";
import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import OptionButton from "@components/repeat/OptionButton";
import { updateYearRepeat } from "@containers/home/ScheduleDrawer/domain/schedule";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";

interface Option {
  MonthAndDay: string;
  NthDayOfMonth: string;
  LastDayOfMonth: string;
  isLastDay: boolean;
}

function Option({
  MonthAndDay,
  NthDayOfMonth,
  LastDayOfMonth,
  isLastDay,
}: Option) {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const yearRepeat = schedule?.repeat.year_type.year_category ?? "";

  const changeYearRepeat = (e: React.MouseEvent) => {
    updateYearRepeat(dispatch, schedule, e);
  };

  return (
    <Stack px={2.5} my={1.5} spacing={1} mx="auto" sx={{ width: "200px" }}>
      <OptionButton
        id="MonthAndDay"
        isSelected={yearRepeat === "MonthAndDay"}
        value={MonthAndDay}
        handleClick={changeYearRepeat}
      />

      <OptionButton
        id="NthDayOfMonth"
        isSelected={yearRepeat === "NthDayOfMonth"}
        value={NthDayOfMonth}
        handleClick={changeYearRepeat}
      />

      {isLastDay && (
        <OptionButton
          id="LastDayOfMonth"
          isSelected={yearRepeat === "LastDayOfMonth"}
          value={LastDayOfMonth}
          handleClick={changeYearRepeat}
        />
      )}
    </Stack>
  );
}

export default Option;
