import {
  Stack, Box, Switch, FormControl, OutlinedInput, InputAdornment
} from '@mui/material';
import RoundedPaper from '../../../../../components/common/RoundedPaper';

function PopupSetting() {
  return (
    <RoundedPaper my={1}>
      <Stack direction="row" justifyContent="space-between">
        <Box>팝업창 설정</Box>
        <Switch defaultChecked size="small" sx={{ p: 0, borderRadius: 6 }} />
      </Stack>

      <Stack spacing={1} mt={1}>
        {/* 표시 항목 */}
        <FormControl fullWidth>
          <OutlinedInput
            id="display"
            startAdornment={<InputAdornment position="start">표시 항목</InputAdornment>}
              // value={form.name}
              // onChange={changePersonalGoal}
            size="small"
            inputProps={{
              style: { textAlign: 'right' },
            }}
          />
        </FormControl>

        {/* 클릭 시 연결 */}
        <FormControl fullWidth>
          <OutlinedInput
            id="connect"
            startAdornment={<InputAdornment position="start">클릭 시 연결</InputAdornment>}
              // value={form.name}
              // onChange={changePersonalGoal}
            size="small"
            inputProps={{
              style: { textAlign: 'right' },
            }}
          />
        </FormControl>
      </Stack>
    </RoundedPaper>
  );
}

export default PopupSetting;
