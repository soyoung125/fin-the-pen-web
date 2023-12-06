import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { Box, Stack, InputBase } from "@mui/material";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";

function End() {
  const schedule = useSelector(selectSchedule);

  return (
    <Box>
      <RadioLabel value="end" label="종료 날짜" />

      {schedule?.period === "end" && (
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <InputBase
            sx={{
              py: 1,
              px: "10px",
              width: "60px",
              backgroundColor: "rgba(115, 91, 242, 0.10)",
            }}
            placeholder="YYYY"
            inputProps={{ "aria-label": "search google maps" }}
          />

          <Box>년</Box>

          <InputBase
            sx={{
              py: 1,
              px: "10px",
              width: "50px",
              backgroundColor: "rgba(115, 91, 242, 0.10)",
            }}
            placeholder="MM"
            inputProps={{ "aria-label": "search google maps" }}
          />

          <Box>월</Box>

          <InputBase
            sx={{
              py: 1,
              px: "10px",
              width: "50px",
              backgroundColor: "rgba(115, 91, 242, 0.10)",
            }}
            placeholder="DD"
            inputProps={{ "aria-label": "search google maps" }}
          />

          <Box>일</Box>

          <Box>N요일</Box>
        </Stack>
      )}
    </Box>
  );
}

export default End;
