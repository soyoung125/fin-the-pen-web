import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import InputLabel from "../../radio/RadioLabel/InputLabel";

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
      <RadioLabel
        value="Week"
        label={
          <InputLabel
            label="매주"
            postInputLabel="주 마다"
            max={52}
            type="repeat"
            option="Week"
          />
        }
      />

      {schedule?.repeat === "Week" && (
        <Stack px={2.5} my={1.5} direction="row" justifyContent="space-between">
          {week.map((w) => (
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
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default Week;
