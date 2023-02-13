import { Box, IconButton, Stack } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from '../../../../utils/constants/schedule';
import DetailCard from '../../../../components/assetManagement/pages/regularDepositWithdrawal/regular/DetailCard';
import Title from '../../../../components/assetManagement/pages/regularDepositWithdrawal/regular/Title';
import PATH from '../../../../utils/constants/path';
import { selectSchedules } from '../../../../utils/redux/schedule/scheduleSlice';

function RegularDepositWithdrawal() {
  const navigate = useNavigate();
  const schedules = useSelector(selectSchedules);
  const [deposits, setDeposits] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);

  useEffect(() => {
    setDeposits(schedules.filter((s) => s.repeating_cycle !== '없음' && s.type === '+'));
    setWithdrawals(schedules.filter((s) => s.repeating_cycle !== '없음' && s.type === '-'));
  }, []);

  return (
    <>
      <Title
        type="+"
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE['+']} 내역`}
      >
        <Stack direction="row" alignItems="center" sx={{ color: 'primary.main' }}>
          <Box>{`총 ${deposits.length}건`}</Box>
          <IconButton color="primary" onClick={() => navigate(PATH.regularDepositWithdrawalDetail, { state: { type: '+', data: deposits } })}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Title>

      {deposits.map((d) => <DetailCard data={d} key={d.id} />)}

      <Title
        type="-"
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE['-']} 내역`}
      >
        <Stack direction="row" alignItems="center" sx={{ color: 'primary.main' }}>
          <Box>{`총 ${withdrawals.length}건`}</Box>
          <IconButton color="primary" onClick={() => navigate(PATH.regularDepositWithdrawalDetail, { state: { type: '-', data: withdrawals } })}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Title>

      {withdrawals.map((w) => <DetailCard data={w} key={w.id} />)}
    </>
  );
}

export default RegularDepositWithdrawal;
