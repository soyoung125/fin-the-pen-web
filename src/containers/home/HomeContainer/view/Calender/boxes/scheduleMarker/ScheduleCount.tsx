import { Box } from "@mui/material";

interface ScheduleCountProps {
  count: number;
}

function ScheduleCount({ count }: ScheduleCountProps) {
  return (
    <Box sx={{ color: "#A9ACB2", fontSize: "12px", textAlign: "center" }}>
      {count}
    </Box>
  );
}

export default ScheduleCount;
