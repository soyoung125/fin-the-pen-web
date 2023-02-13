import { useLocation } from 'react-router-dom';
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from '../../../../../utils/constants/schedule';
import DetailCard from '../regular/DetailCard';
import Title from '../regular/Title';

function RegularDepositWithdrawalDetail() {
  const { state } = useLocation();

  return (
    <>
      <Title
        type={state.type}
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE[state.type]} 내역`}
      />

      <DetailCard />
    </>
  );
}

export default RegularDepositWithdrawalDetail;
