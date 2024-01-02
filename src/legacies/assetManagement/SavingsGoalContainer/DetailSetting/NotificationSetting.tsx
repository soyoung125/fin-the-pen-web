import {
  Stack, Box, FormControl, OutlinedInput, InputAdornment
} from '@mui/material';
import RoundedPaper from '../../../../components/common/RoundedPaper';
import { NotificationInterface } from '../../../../types/common';
import SwitchButton from '../../../../components/common/SwitchButton';

interface NotificationSettingProps {
  notification: NotificationInterface,
  handleNotification: (value: NotificationInterface) => void,
}

function NotificationSetting({ notification, handleNotification }: NotificationSettingProps) {
  return (
    <RoundedPaper my={1}>
      <Stack direction="row" justifyContent="space-between">
        <Box>저축 알림 설정</Box>
        <SwitchButton
          checked={notification.isOn}
          handleChange={() => handleNotification({ ...notification, isOn: !notification.isOn })}
        />
      </Stack>

      {notification.isOn
      && (
      <Box mt={1}>
        {/* 알림 시간 */}
        <FormControl fullWidth>
          <OutlinedInput
            id="time"
            type="time"
            startAdornment={<InputAdornment position="start">알림 시간</InputAdornment>}
            value={notification.time}
            onChange={(state) => handleNotification({ ...notification, time: state.target.value })}
            size="small"
            inputProps={{
              style: { textAlign: 'right' },
            }}
          />
        </FormControl>
      </Box>
      )}

    </RoundedPaper>
  );
}

export default NotificationSetting;
