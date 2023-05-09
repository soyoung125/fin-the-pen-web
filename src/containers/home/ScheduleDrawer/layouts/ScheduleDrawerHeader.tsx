import {
  Button, Stack, Tooltip, Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { SCHEDULE_DRAWER, SCHEDULE_DRAWER_MODE } from '../../../../domain/constants/schedule';
import { selectSchedule } from '../../../../app/redux/slices/scheduleSlice';
import { selectGuestMode } from '../../../../app/redux/slices/commonSlice';
import { deleteSelectedSchedule } from '../../../../domain/tools';
import { ScheduleDrawerModeValue } from '../../../../types/schedule';

interface ScheduleDrawerHeaderProps {
  mode: ScheduleDrawerModeValue;
  handleClose: () => void;
}
function ScheduleDrawerHeader({ mode, handleClose }: ScheduleDrawerHeaderProps) {
  const dispatch = useDispatch();
  const schedule = useSelector(selectSchedule);
  const guestMode = useSelector(selectGuestMode);

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      {
        mode === SCHEDULE_DRAWER_MODE.modify
          ? (
            <Tooltip
              title={!guestMode && '아직 일반 모드에서는 동작하지 않습니다.'}
              placement="top"
            >
              <Button
                onClick={() => deleteSelectedSchedule(dispatch, schedule, handleClose)}
                color="error"
              >
                <DeleteForeverIcon />
              </Button>
            </Tooltip>

          )
          : <Button disabled />
      }

      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{SCHEDULE_DRAWER.drawer_title[mode]}</Typography>
      <Button onClick={handleClose}><ClearIcon /></Button>
    </Stack>
  );
}
export default ScheduleDrawerHeader;
