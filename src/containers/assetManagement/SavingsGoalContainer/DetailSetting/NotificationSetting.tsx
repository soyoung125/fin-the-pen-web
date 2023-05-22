import {
  Stack, Box, Switch, FormControl, OutlinedInput, InputAdornment
} from '@mui/material';
import RoundedPaper from '../../../../components/common/RoundedPaper';

function NotificationSetting() {
  return (
    <RoundedPaper my={1}>
      <Stack direction="row" justifyContent="space-between">
        <Box>저축 알림 설정</Box>
        <Switch defaultChecked size="small" sx={{ p: 0, borderRadius: 6 }} />
      </Stack>

      <Box mt={1}>
        {/* 알림 시간 */}
        <FormControl fullWidth>
          <OutlinedInput
            id="time"
            startAdornment={<InputAdornment position="start">알림 시간</InputAdornment>}
            // value={form.name}
            // onChange={changePersonalGoal}
            size="small"
            inputProps={{
              style: { textAlign: 'right' },
            }}
          />
        </FormControl>
      </Box>
    </RoundedPaper>
  );
}

export default NotificationSetting;
