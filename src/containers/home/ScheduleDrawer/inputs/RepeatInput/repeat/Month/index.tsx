import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import InputLabel from "../../radio/RadioLabel/InputLabel";
import DateButton from "@components/common/DateButton";

function Month() {
  const schedule = useSelector(selectSchedule);
  const months = Array.from({ length: 31 }, (_, i) => i + 1);
  const date = moment(schedule?.start_date).format("D");

  const [selectedOption, setSelectedOption] = useState("date");
  const [selectedDate, setSelectedDate] = useState<number[]>([Number(date)]);

  const handleClick = (d: number) => {
    if (selectedDate.includes(d)) {
      setSelectedDate(selectedDate.filter((s) => s !== d));
      return;
    }
    setSelectedDate(selectedDate.concat(d));
  };

  return (
    <>
      <RadioLabel
        value="Month"
        label={
          <InputLabel
            label="매달"
            postInputLabel="개월 마다"
            max={12}
            type="repeat"
            option="Month"
          />
        }
      />

      {schedule?.repeat === "Month" && (
        <Grid container px={2.5} py={1.5} columns={14} spacing={1.5}>
          <Grid item xs={7}>
            <Button
              fullWidth
              variant={selectedOption === "date" ? "contained" : "outlined"}
              color={selectedOption === "date" ? "primary" : "secondary"}
              sx={{ borderRadius: "20px" }}
              onClick={() => setSelectedOption("date")}
            >{`${date}일마다 반복`}</Button>
          </Grid>

          <Grid item xs={7}>
            <Button
              fullWidth
              variant={selectedOption === "select" ? "contained" : "outlined"}
              color={selectedOption === "select" ? "primary" : "secondary"}
              sx={{ borderRadius: "20px" }}
              onClick={() => setSelectedOption("select")}
            >
              반복할 날짜 선택
            </Button>
          </Grid>

          {selectedOption === "select" &&
            months.map((d) => (
              <Grid item xs={2} display="flex" mt={2.5} justifyContent="center">
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
