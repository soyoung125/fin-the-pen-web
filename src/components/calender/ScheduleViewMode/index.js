import { Box, Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { changeViewMode, selectViewMode } from '../../../utils/redux/schedule/scheduleSlice';

function ScheduleViewMode() {
  const dispatch = useDispatch();
  const viewMode = useSelector(selectViewMode);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ borderRadius: 4, backgroundColor: grey[200] }}>
        <Button
          sx={{ borderRadius: 4 }}
          variant={viewMode === 'asset' ? 'contained' : 'text'}
          onClick={() => dispatch(changeViewMode('asset'))}
        >
          자산
        </Button>
        <Button
          sx={{ borderRadius: 4 }}
          variant={viewMode === 'schedule' ? 'contained' : 'text'}
          onClick={() => dispatch(changeViewMode('schedule'))}
        >
          일정
        </Button>
      </Box>
    </Box>
  );
}

export default ScheduleViewMode;
