import OptionButton from "@components/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/buttons/OptionButton.tsx";
import { Stack } from "@mui/material";
import { useScheduleForm } from "../../../../../../../../hooks/useScheduleForm.ts";

interface Option {
  date: { month: string; date: string; day: string; week: number };
  isLastDay: boolean;
}

function Option({ date, isLastDay }: Option) {
  const { updateYearRepeat, scheduleForm } = useScheduleForm();

  const week = ["첫", "두", "세", "네", "다섯", "여섯"];
  const yearRepeat = scheduleForm?.repeat.year_type.year_category ?? "";

  const changeYearRepeat = (id: string, value: string) => {
    updateYearRepeat(id, value);
  };

  return (
    <Stack my={1.5} spacing={1} mx="auto" sx={{ width: "200px" }}>
      <OptionButton
        id="MonthAndDay"
        isSelected={yearRepeat === "MonthAndDay"}
        value={`${date.month}-${date.date}`}
        contents={`${date.month}월 ${date.date}일`}
        handleClick={() =>
          changeYearRepeat("MonthAndDay", `${date.month}-${date.date}`)
        }
      />

      <OptionButton
        id="NthDayOfMonth"
        isSelected={yearRepeat === "NthDayOfMonth"}
        value={`${date.month}월 ${date.week + 1}번째 ${date.day}`}
        contents={`${date.month}월 ${week[date.week]}번째 ${date.day}`}
        handleClick={() =>
          changeYearRepeat(
            "NthDayOfMonth",
            `${date.month}월 ${date.week + 1}번째 ${date.day}`
          )
        }
      />

      {isLastDay && (
        <OptionButton
          id="LastDayOfMonth"
          isSelected={yearRepeat === "LastDayOfMonth"}
          value={`${date.month}월 마지막 ${date.day}`}
          contents={`${date.month}월 마지막 ${date.day}`}
          handleClick={() =>
            changeYearRepeat(
              "LastDayOfMonth",
              `${date.month}월 마지막 ${date.day}`
            )
          }
        />
      )}
    </Stack>
  );
}

export default Option;
