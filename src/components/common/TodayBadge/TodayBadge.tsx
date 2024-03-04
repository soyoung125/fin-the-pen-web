import { Box } from "@mui/material";

interface TodayBadgeProps {
  isWeek?: boolean;
}

function TodayBadge({ isWeek }: TodayBadgeProps) {
  return (
    <Box
      px="6px"
      bgcolor="success.main"
      color="white"
      borderRadius="9px"
      fontSize="12px"
      fontWeight={600}
      height={18}
    >
      {isWeek ? "이번주" : "오늘"}
    </Box>
  );
}

export default TodayBadge;
