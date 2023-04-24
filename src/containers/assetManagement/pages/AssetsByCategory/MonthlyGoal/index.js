/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  Box, IconButton, Stack,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import RoundedPaper from '../../../../../components/common/RoundedPaper';
import ArrowTooltip from '../../../../../components/common/ArrowTooltip';
import { selectSchedules } from '../../../../../domain/redux/schedule/scheduleSlice';

function MonthlyGoal({
  title, openAlertModal, open, monthlyConsumptionGoal,
}) {
  const schedules = useSelector(selectSchedules);
  const [lastMonthSpending, setLastMonthSpending] = useState(0);
  const [ThrMonthsSpending, setThrMonthsSpending] = useState(0);

  useEffect(() => {
    setLastMonthSpending(calculateSpending(1));
    setThrMonthsSpending(calculateSpending(3));
  }, []);

  const calculateSpending = (months) => {
    let spending = 0;
    for (let i = 1; i <= months; i += 1) {
      const compareDate = moment().subtract(i, 'months');
      const lastMonthSchedules = schedules.filter((s) => compareDate.isSame(s.date, 'M') && s.type === '-');
      spending += lastMonthSchedules
        .reduce((preVal, current) => preVal + parseInt(current.expected_spending, 10), 0);
    }
    return Math.floor(spending / months);
  };

  return (
    <RoundedPaper my={2}>
      <Box sx={{ typography: 'button-text', fontWeight: 'bold' }}>{title}</Box>

      <Box sx={{
        typography: 'h4', fontWeight: 'bold', color: 'primary.main', my: 1,
      }}
      >
        {`${monthlyConsumptionGoal.toLocaleString('ko-KR')}원`}
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
        <Box>{`${ThrMonthsSpending.toLocaleString('ko-KR')}원`}</Box>
      </Stack>
    </RoundedPaper>
  );
}

export default MonthlyGoal;
