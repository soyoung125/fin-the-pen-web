import { Box, Button, ButtonGroup } from '@mui/material';

function ScheduleViewMode() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <ButtonGroup variant="outlined" sx={{ marginX: 'auto', justifyContent: 'center' }}>
        <Button>자산</Button>
        <Button>일정</Button>
      </ButtonGroup>
    </Box>
  );
}

export default ScheduleViewMode;
