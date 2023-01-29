import { Button, Stack, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { SCHEDULE_DRAWER, SCHEDULE_DRAWER_MODE } from '../../../../utils/constants/schedule';

function ScheduleDrawerHeader({ mode, setBottomDrawerOpen, deleteSelectedSchedule }) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      {mode === SCHEDULE_DRAWER_MODE.수정
        ? <Button onClick={() => setBottomDrawerOpen(false)}>취소</Button>
        : <Button disabled />}
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{SCHEDULE_DRAWER.drawer_title[mode]}</Typography>

      {mode === SCHEDULE_DRAWER_MODE.수정
        ? <Button onClick={() => deleteSelectedSchedule()} color="error">삭제</Button>
        : <Button onClick={() => setBottomDrawerOpen(false)}><ClearIcon /></Button>}
    </Stack>
  );
}
export default ScheduleDrawerHeader;
