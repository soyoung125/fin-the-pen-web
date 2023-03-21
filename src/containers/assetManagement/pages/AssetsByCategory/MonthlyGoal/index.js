import {
  Box, IconButton, Stack,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RoundedPaper from '../../../../../components/common/RoundedPaper';
import ArrowTooltip from '../../../../../components/common/ArrowTooltip';

function MonthlyGoal({ title, openAlertModal, open }) {
  return (
    <RoundedPaper>
      <Box sx={{ typography: 'button-text', fontWeight: 'bold' }}>{title}</Box>

      <Box sx={{
        typography: 'h4', fontWeight: 'bold', color: 'primary.main', my: 1,
      }}
      >
        xxxxxxx원
        <ArrowTooltip open={open} title="목표액 수정하기">
          <IconButton color="primary" onClick={openAlertModal} sx={{ p: 0 }}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </ArrowTooltip>
      </Box>

      <Stack direction="row" justifyContent="space-between" sx={{ color: '#979797' }}>
        <Box>지난 달 지출</Box>
        <Box>xxxxxxx원</Box>
      </Stack>

      <Stack direction="row" justifyContent="space-between" sx={{ color: '#979797' }}>
        <Box>최근 3개월 평균 지출</Box>
        <Box>xxxxxxx원</Box>
      </Stack>
    </RoundedPaper>
  );
}

export default MonthlyGoal;
