import {
  selectRepeatType,
  selectSchedule,
  selectStartDate,
} from "@app/redux/slices/scheduleSlice";
import { Button, Grid } from "@mui/material";
import moment from "moment";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import InputLabel from "../../radio/RadioLabel/InputLabel";
import DateButton from "@components/repeat/DateButton";
import { UpdateStateInterface } from "@type/common";
import OptionButton from "@components/repeat/OptionButton";

interface MonthProps {
  changeRepeat: (state: UpdateStateInterface) => void;
}

function Month({ changeRepeat }: MonthProps) {
  const schedule = useSelector(selectSchedule);
  const repeatType = useSelector(selectRepeatType);
  const startDate = useSelector(selectStartDate);
  const months = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  const selectedDate =
    schedule?.repeat.month_type.select_date.split(", ") ?? [];
  const todayRepeat = schedule?.repeat.month_type.today_repeat ?? true;

  const changeTodayRepeat = (e: React.MouseEvent) => {
    if (e.currentTarget.id === "todayRepeat") {
      changeRepeat({ target: { id: "today_repeat", value: true } });
    } else {
      changeRepeat({ target: { id: "today_repeat", value: false } });
    }
  };

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

  return (
    <>
      <RadioLabel
        value="month"
        label={
          <InputLabel
            label="매달"
            postInputLabel="개월 마다"
            max={12}
            option="month"
          />
        }
      />

      {repeatType === "month" && (
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
      )}
    </>
  );
}

export default Month;
