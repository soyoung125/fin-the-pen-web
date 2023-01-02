import { Box } from '@mui/material';
import SignInContainer from '../sign/SignInContainer';

function MyPageContainer() {
  return (
    <Box>
      로그인 검사 후 MyPage를 띄울 지, SignInContainer를 띄어줄 지 결정하는 로직이 필요함
      <SignInContainer />
    </Box>
  );
}
export default MyPageContainer;
