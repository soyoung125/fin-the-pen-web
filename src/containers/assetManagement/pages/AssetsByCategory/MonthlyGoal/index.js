import {
  Box, IconButton, Stack,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import RoundedPaper from '../../../../../components/common/RoundedPaper';
import ArrowTooltip from '../../../../../components/common/ArrowTooltip';
import { selectSchedules } from '../../../../../utils/redux/schedule/scheduleSlice';

function MonthlyGoal({
  title, openAlertModal, open, monthlyconsumptionGoal,
}) {
  const schedules = useSelector(selectSchedules);
  const [lastMonthSpending, setLastMontSpending] = useState(0);

  useEffect(() => {
    const compareDate = moment().subtract(1, 'months');
    const lastMonthSchedules = schedules.filter((s) => compareDate.isSame(s.date, 'M') && s.type === '-');

    setLastMontSpending(lastMonthSchedules
      .reduce((preVal, current) => preVal + parseInt(current.expected_spending, 10), 0));
  }, []);

  return (
    <RoundedPaper>
      <Box sx={{ typography: 'button-text', fontWeight: 'bold' }}>{title}</Box>

      <Box sx={{
        typography: 'h4', fontWeight: 'bold', color: 'primary.main', my: 1,
      }}
      >
        {`${monthlyconsumptionGoal.toLocaleString('ko-KR')}원`}
        <ArrowTooltip open={open} title="목표액 수정하기">
          <IconButton color="primary" onClick={openAlertModal} sx={{ p: 0 }}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </ArrowTooltip>
      </Box>

      <Stack direction="row" justifyContent="space-between" sx={{ color: '#979797' }}>
        <Box>지난 달 지출</Box>
        <Box>{`${lastMonthSpending.toLocaleString('ko-KR')}원`}</Box>
      </Stack>

      <Stack direction="row" justifyContent="space-between" sx={{ color: '#979797' }}>
        <Box>최근 3개월 평균 지출</Box>
        <Box>xxxxxxx원</Box>
      </Stack>
    </RoundedPaper>
  );
}

export default MonthlyGoal;
