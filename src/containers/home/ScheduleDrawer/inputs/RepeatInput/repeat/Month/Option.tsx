import {
  selectSchedule,
  selectStartDate,
} from "@app/redux/slices/scheduleSlice";
import DateButton from "@components/repeat/DateButton";
import OptionButton from "@components/repeat/OptionButton";
import { Grid } from "@mui/material";
import { RepeatOptionProps } from "@type/schedule";
import moment from "moment";
import { useSelector } from "react-redux";

function Option({ changeRepeat }: RepeatOptionProps) {
  const schedule = useSelector(selectSchedule);
  const startDate = useSelector(selectStartDate);
  const months = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const todayRepeat = schedule?.repeat.month_type.today_repeat ?? true;
  const selectedDate =
    schedule?.repeat.month_type.select_date.split(", ") ?? [];

  const changeSelectDate = (date: string) => {
    changeRepeat({ target: { id: "select_date", value: date } });
  };

  const handleClick = (d: string) => {
    if (selectedDate.includes(d)) {
      changeSelectDate(selectedDate.filter((s) => s !== d).join(", "));
      return;
    }
    changeSelectDate(selectedDate.concat(d).join(", "));
  };

  const changeTodayRepeat = (e: React.MouseEvent) => {
    if (e.currentTarget.id === "todayRepeat") {
      changeRepeat({ target: { id: "today_repeat", value: true } });
    } else {
      changeRepeat({ target: { id: "today_repeat", value: false } });
    }
  };

  return (
    <Grid container px={2.5} py={1.5} columns={14} spacing={1.5}>
      <Grid item xs={7}>
        <OptionButton
          id="todayRepeat"
          isSelected={todayRepeat}
          value={`${moment(startDate).date()}일마다 반복`}
          handleClick={changeTodayRepeat}
        />
      </Grid>

      <Grid item xs={7}>
        <OptionButton
          id="selectDate"
          isSelected={!todayRepeat}
          value="반복할 날짜 선택"
          handleClick={changeTodayRepeat}
        />
      </Grid>

      {!todayRepeat &&
        months.map((d) => (
          <Grid
            item
            xs={2}
            display="flex"
            mt={2.5}
            justifyContent="center"
            key={Math.random()}
          >
            <DateButton
              value={d}
              handleClick={() => handleClick(d)}
              isSelected={selectedDate.includes(d)}
            />
          </Grid>
        ))}
    </Grid>
  );
}

export default Option;
