import { Box, IconButton, Stack } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useNavigate } from 'react-router-dom';
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from '../../../../utils/constants/schedule';
import DetailCard from '../../../../components/assetManagement/pages/regularDepositWithdrawal/regular/DetailCard';
import Title from '../../../../components/assetManagement/pages/regularDepositWithdrawal/regular/Title';
import PATH from '../../../../utils/constants/path';

function RegularDepositWithdrawal() {
  const navigate = useNavigate();

  return (
    <>
      <Title
        type="+"
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE['+']} 내역`}
      >
        <Stack direction="row" alignItems="center" sx={{ color: 'primary.main' }}>
          <Box>총 n건</Box>
          <IconButton color="primary" onClick={() => navigate(PATH.regularDepositWithdrawalDetail, { state: { type: '+' } })}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Title>

      <DetailCard />

      <Title
        type="-"
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE['-']} 내역`}
      >
        <Stack direction="row" alignItems="center" sx={{ color: 'primary.main' }}>
          <Box>총 n건</Box>
          <IconButton color="primary" onClick={() => navigate(PATH.regularDepositWithdrawalDetail, { state: { type: '-' } })}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Title>

      <DetailCard />
    </>
  );
}

export default RegularDepositWithdrawal;
