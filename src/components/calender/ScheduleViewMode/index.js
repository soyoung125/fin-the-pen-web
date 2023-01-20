import { Box, Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';

function ScheduleViewMode() {
  const [viewMode, setViewMode] = useState('schedule');
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ borderRadius: 4, backgroundColor: grey[200] }}>
        <Button
          sx={{ borderRadius: 4 }}
          variant={viewMode === 'asset' ? 'contained' : 'text'}
          onClick={() => setViewMode('asset')}
        >
          자산
        </Button>
        <Button
          sx={{ borderRadius: 4 }}
          variant={viewMode === 'schedule' ? 'contained' : 'text'}
          onClick={() => setViewMode('schedule')}
        >
          일정
        </Button>
      </Box>
    </Box>
  );
}

export default ScheduleViewMode;
