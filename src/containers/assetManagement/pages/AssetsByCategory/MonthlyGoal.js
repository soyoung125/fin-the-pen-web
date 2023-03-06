import {
  Box, IconButton, Stack, Tooltip,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RoundedPaper from '../../../../components/common/RoundedPaper';

function MonthlyGoal({ title }) {
  return (
    <RoundedPaper>
      <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>{title}</Box>
      <Box sx={{
        typography: 'h4', fontWeight: 'bold', color: 'primary.main', my: 1,
      }}
      >
        xxxxxxx원
        <Tooltip
          open
          arrow
          placement="top"
          title="목표액 수정하기"
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: 'primary.main',
              },
            },
            arrow: {
              sx: {
                '&::before': {
                  backgroundColor: 'primary.main',
                },
              },
            },
          }}
        >
          <IconButton color="primary" onClick={() => console.log('modify')} sx={{ p: 0 }}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Tooltip>
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
