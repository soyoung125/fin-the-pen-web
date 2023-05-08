import { useSelector } from 'react-redux';
import { selectUser } from '../../app/redux/slices/userSlice';
import TestBox from './box/TestBox';

function UserData() {
  const user = useSelector(selectUser);

  return (
    <TestBox title="Redux : selectUser">
      {JSON.stringify(user)}
    </TestBox>
  );
}
export default UserData;
