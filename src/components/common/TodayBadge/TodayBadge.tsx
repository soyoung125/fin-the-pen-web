import { Box } from "@mui/material";

function TodayBadge() {
  return (
    <Box
      px="6px"
      bgcolor="success.main"
      color="white"
      borderRadius="9px"
      fontSize="12px"
      fontWeight={600}
    >
      오늘
    </Box>
  );
}

export default TodayBadge;
