import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import RadioButton from "@components/common/RadioButton";
import {
  FormControlLabel,
  Input,
  Box,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

function Week() {
  const schedule = useSelector(selectSchedule);
  const week = ["월", "화", "수", "목", "금", "토", "일"];

  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (w: string) => {
    if (selected.includes(w)) {
      setSelected(selected.filter((s) => s !== w));
      return;
    }
    setSelected(selected.concat(w));
  };

  return (
    <Box>
      <FormControlLabel
        control={<RadioButton value="Week" />}
        label={
          schedule?.repeat === "Week" ? (
            <>
              <Input
                defaultValue={1}
                type="number"
                inputProps={{
                  min: 1,
                  max: 52,
                }}
                sx={{ width: "30px" }}
              />
              주 마다
            </>
          ) : (
            <>매주</>
          )
        }
        sx={{ px: 2.5 }}
      />

      <Divider />

      {schedule?.repeat === "Week" && (
        <Grid px={2.5} my={1.5} container columns={{ xs: 14 }}>
          {week.map((w) => (
            <Grid item xs={2}>
              <Button
                onClick={() => handleChange(w)}
                variant={selected.includes(w) ? "contained" : "outlined"}
                color={selected.includes(w) ? "primary" : "secondary"}
                sx={{
                  minWidth: "36px",
                  height: "36px",
                  p: 0,
                  borderRadius: "12px",
                }}
              >
                {w}
              </Button>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Week;
