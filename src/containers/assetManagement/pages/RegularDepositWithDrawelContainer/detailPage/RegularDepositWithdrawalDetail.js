import { useLocation } from 'react-router-dom';
import DetailCard from '../regular/DetailCard';
import Title from '../regular/Title';

function RegularDepositWithdrawalDetail() {
  const { state } = useLocation();

  console.log(state);
  return (
    <>
      <Title
        type={state.type}
        title="정기 입금 내역"
      />

      <DetailCard />
    </>
  );
}

export default RegularDepositWithdrawalDetail;
