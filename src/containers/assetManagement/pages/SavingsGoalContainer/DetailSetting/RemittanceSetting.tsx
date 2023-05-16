import {
  Stack, Box, Switch, FormControl, OutlinedInput, InputAdornment
} from '@mui/material';
import RoundedPaper from '../../../../../components/common/RoundedPaper';

function RemittanceSetting() {
  return (
    <RoundedPaper my={1}>
      <Stack direction="row" justifyContent="space-between">
        <Box>계좌 송금 설정</Box>
        <Switch defaultChecked size="small" sx={{ p: 0, borderRadius: 6 }} />
      </Stack>

      <Stack spacing={1} mt={1}>
        {/* 은행명 */}
        <FormControl fullWidth>
          <OutlinedInput
            id="bankName"
            startAdornment={<InputAdornment position="start">은행명</InputAdornment>}
              // value={form.name}
              // onChange={changePersonalGoal}
            size="small"
            inputProps={{
              style: { textAlign: 'right' },
            }}
          />
        </FormControl>

        {/* 계좌번호 */}
        <FormControl fullWidth>
          <OutlinedInput
            id="accountNumber"
            startAdornment={<InputAdornment position="start">계좌번호</InputAdornment>}
              // value={form.name}
              // onChange={changePersonalGoal}
            size="small"
            inputProps={{
              style: { textAlign: 'right' },
            }}
          />
        </FormControl>

        {/* 송금일 */}
        <FormControl fullWidth>
          <OutlinedInput
            id="date"
            startAdornment={<InputAdornment position="start">송금일</InputAdornment>}
              // value={form.name}
              // onChange={changePersonalGoal}
            size="small"
            inputProps={{
              style: { textAlign: 'right' },
            }}
          />
        </FormControl>

        {/* 송금액 */}
        <FormControl fullWidth>
          <OutlinedInput
            id="amount"
            startAdornment={<InputAdornment position="start">송금액</InputAdornment>}
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

export default RemittanceSetting;
