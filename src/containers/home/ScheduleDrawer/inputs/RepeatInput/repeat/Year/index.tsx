import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { Input, Box, Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";

function Year() {
  const schedule = useSelector(selectSchedule);

  return (
    <Box>
      <RadioLabel
        value="Year"
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
      />

      {schedule?.repeat === "Year" && (
        <Stack px={2.5} spacing={1} alignItems="center">
          <Button
            variant="outlined"
            color="secondary"
            sx={{ borderRadius: "20px", width: "200px" }}
          >
            MM월 DD일
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ borderRadius: "20px", width: "200px" }}
          >
            MM월 N 번째 D요일
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ borderRadius: "20px", width: "200px" }}
          >
            MM월 마지막 D요일
          </Button>
        </Stack>
      )}
    </Box>
  );
}

export default Year;
