import { Stack } from '@mui/material';
import CenterBox from '../../../components/layouts/CenterBox';
import useHeader from '../../../hooks/useHeader';
import Header from './component/Header';
import SignUp from './component/SignUp';

function SignUpContainer() {
  useHeader(false);

  return (
    <CenterBox>
      <Stack
        justifyContent="center"
        alignItems="center"
        px={1}
      >
        <Header />
        <SignUp />
      </Stack>
    </CenterBox>
  );
}
export default SignUpContainer;
/**
 * 회원가입 페이지
 */
