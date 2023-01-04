import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../utils/redux/user/userSlice';
import SignInContainer from '../sign/SignInContainer';

function MyPageContainer() {
  const user = useSelector(selectUser);
  return (
    <Box>
      로그인 검사 후 MyPage를 띄울 지, SignInContainer를 띄어줄 지 결정하는 로직이 필요함
      {
        user === null
        && <SignInContainer />
      }
    </Box>
  );
}
export default MyPageContainer;
