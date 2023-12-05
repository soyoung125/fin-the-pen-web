import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import RadioButton from "@components/common/RadioButton";
import { FormControlLabel, Input, Box, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";

function Month() {
  const schedule = useSelector(selectSchedule);
  const months = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <Box>
      <FormControlLabel
        control={<RadioButton value="Month" />}
        label={
          schedule?.repeat === "Month" ? (
            <>
              <Input
                defaultValue={1}
                type="number"
                inputProps={{
                  min: 1,
                  max: 12,
                }}
                sx={{ width: "30px" }}
              />
              개월 마다
            </>
          ) : (
            <>매달</>
          )
        }
        sx={{ px: 2.5 }}
      />

      <Grid px={2.5} container columns={{ xs: 14 }}>
        {schedule?.repeat === "Month" &&
          months.map((w) => (
            <Grid item xs={2}>
              <Button>{w}</Button>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default Month;
