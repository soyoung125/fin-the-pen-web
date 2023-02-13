import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from '../../../../../utils/constants/schedule';
import Title from '../../../../../components/assetManagement/pages/regularDepositWithdrawal/regular/Title';
import SwipeableDetailCard from '../../../../../components/assetManagement/pages/regularDepositWithdrawal/regular/SwipeableDetailCard';

function RegularDepositWithdrawalDetail() {
  const { state } = useLocation();
  const { type, data } = state;

  return (
    <>
      <Title
        type={state.type}
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE[type]} 내역`}
      >
        <Box sx={{ color: 'primary.main' }}>{`총 ${data.length}건`}</Box>
      </Title>

      {data.map((d) => <SwipeableDetailCard data={d} key={d.id} />)}
    </>
  );
}

export default RegularDepositWithdrawalDetail;
