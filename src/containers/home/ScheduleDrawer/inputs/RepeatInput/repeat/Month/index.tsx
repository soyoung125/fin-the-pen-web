import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { Box, Button, Grid } from "@mui/material";
import moment from "moment";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import InputLabel from "../../radio/RadioLabel/InputLabel";

function Month() {
  const schedule = useSelector(selectSchedule);
  const months = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <Box>
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
        <Grid px={2.5} container columns={{ xs: 14 }} spacing={1}>
          <Grid item xs={7}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              sx={{ borderRadius: "20px" }}
            >{`${moment(schedule.start_date).format("D")}일마다 반복`}</Button>
          </Grid>

          <Grid item xs={7}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              sx={{ borderRadius: "20px" }}
            >
              반복할 날짜 선택
            </Button>
          </Grid>

          {months.map((d) => (
            <Grid item xs={2}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  minWidth: "36px",
                  height: "36px",
                  p: 0,
                  borderRadius: "12px",
                }}
              >
                {d}
              </Button>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Month;
