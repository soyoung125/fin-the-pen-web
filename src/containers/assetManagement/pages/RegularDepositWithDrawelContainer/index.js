import {
  Box, Stack,
} from '@mui/material';
import RoundedBorderBox from '../../../../components/common/RoundedBorderBox';
import Title from './regular/Title';

function RegularDepositWithdrawal() {
  return (
    <>
      <Title
        type="+"
        title="정기 입금 내역"
      />

      <RoundedBorderBox>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Box sx={{ mb: 1 }}>매달 1일</Box>
            <Box>OO은행 월급</Box>
          </Box>
          <Box sx={{ textAlign: 'end' }}>
            <Box sx={{ mb: 1 }}>월급날</Box>
            <Box sx={{ color: 'primary.main' }}>xxxxxxx원</Box>
          </Box>
        </Stack>
      </RoundedBorderBox>

      <Title
        type="-"
        title="정기 출금 내역"
      />

      <RoundedBorderBox>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Box sx={{ mb: 1 }}>매달 1일</Box>
            <Box>넷플릭스</Box>
          </Box>
          <Box sx={{ textAlign: 'end' }}>
            <Box sx={{ mb: 1 }}>넷플릭스 결제</Box>
            <Box sx={{ color: 'primary.main' }}>xxxxxxx원</Box>
          </Box>
        </Stack>
      </RoundedBorderBox>
    </>
  );
}

export default RegularDepositWithdrawal;
