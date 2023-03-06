import { useSelector } from 'react-redux';
import { selectGuestMode } from '../../utils/redux/common/commonSlice';
import TestBox from './box/TestBox';

function GuestMode() {
  const guestMode = useSelector(selectGuestMode);

  return (
    <TestBox title="Redux : selectGuestMode">
      {JSON.stringify(guestMode)}
    </TestBox>
  );
}
export default GuestMode;
