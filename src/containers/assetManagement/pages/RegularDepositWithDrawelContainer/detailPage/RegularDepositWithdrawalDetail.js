import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from '../../../../../utils/constants/schedule';
import DetailCard from '../../../../../components/assetManagement/pages/regularDepositWithdrawal/regular/DetailCard';
import Title from '../../../../../components/assetManagement/pages/regularDepositWithdrawal/regular/Title';

function RegularDepositWithdrawalDetail() {
  const { state } = useLocation();

  return (
    <>
      <Title
        type={state.type}
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE[state.type]} 내역`}
      >
        <Box sx={{ color: 'primary.main' }}>총 n건</Box>
      </Title>

      <DetailCard />
    </>
  );
}

export default RegularDepositWithdrawalDetail;
