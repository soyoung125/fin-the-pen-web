import { Box, Button } from '@mui/material';
import { grey } from '@mui/material/colors';

function ScheduleViewMode() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ borderRadius: 4, backgroundColor: grey[200] }}>
        <Button sx={{ borderRadius: 4 }} variant="text">자산</Button>
        <Button sx={{ borderRadius: 4 }} variant="contained">일정</Button>
      </Box>
    </Box>
  );
}

export default ScheduleViewMode;
