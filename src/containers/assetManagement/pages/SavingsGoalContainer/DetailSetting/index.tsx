import {
  Box, Typography, Grid, Button, Stack, Switch, OutlinedInput, FormControl, InputAdornment,
} from '@mui/material';
import RoundedPaper from '../../../../../components/common/RoundedPaper';

function DetailSetting() {
  return (
    <Box sx={{ pt: 3, px: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>저축 세부 설정</Typography>

      <RoundedPaper my={1}>
        <Box>저축 우선순위</Box>
        <Grid container spacing={1} mt={1}>
          <Grid item xs={6}><Button fullWidth variant="contained">한해 저축 목표</Button></Grid>
          <Grid item xs={6}><Button fullWidth variant="outlined">Personal Goal</Button></Grid>
        </Grid>
      </RoundedPaper>

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
    </Box>
  );
}

export default DetailSetting;
