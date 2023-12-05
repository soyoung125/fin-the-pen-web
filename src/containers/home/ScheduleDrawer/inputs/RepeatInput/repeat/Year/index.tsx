import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import RadioButton from "@components/common/RadioButton";
import { FormControlLabel, Input, Box, Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";

function Year() {
  const schedule = useSelector(selectSchedule);

  return (
    <Box>
      <FormControlLabel
        control={<RadioButton value="Year" />}
        label={
          schedule?.repeat === "Year" ? (
            <>
              <Input
                defaultValue={1}
                type="number"
                inputProps={{
                  min: 1,
                  max: 10,
                }}
                sx={{ width: "30px" }}
              />
              년 마다
            </>
          ) : (
            <>매년</>
          )
        }
        sx={{ px: 2.5 }}
      />

      {schedule?.repeat === "Year" && (
        <Stack px={2.5}>
          <Button>MM월 DD일</Button>
          <Button>MM월 N 번째 D요일</Button>
          <Button>MM월 마지막 D요일</Button>
        </Stack>
      )}
    </Box>
  );
}

export default Year;
