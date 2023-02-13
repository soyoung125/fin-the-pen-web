import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from '../../../../utils/constants/schedule';
import DetailCard from './regular/DetailCard';
import Title from './regular/Title';

function RegularDepositWithdrawal() {
  return (
    <>
      <Title
        type="+"
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE['+']} 내역`}
      />

      <DetailCard />

      <Title
        type="-"
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE['-']} 내역`}
      />

      <DetailCard />
    </>
  );
}

export default RegularDepositWithdrawal;
