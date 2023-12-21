import OptionButton from "@components/repeat/OptionButton";
import { Stack } from "@mui/material";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm.ts";

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
  const { updateYearRepeat, scheduleForm } = useScheduleForm();

  const yearRepeat = scheduleForm?.repeat.year_type.year_category ?? "";

  const changeYearRepeat = (e: React.MouseEvent) => {
    updateYearRepeat(e);
  };

  return (
    <Stack my={1.5} spacing={1} mx="auto" sx={{ width: "200px" }}>
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
