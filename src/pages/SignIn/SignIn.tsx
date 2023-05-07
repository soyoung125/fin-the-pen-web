import { Stack } from '@mui/material';
import CenterBox from '../../components/layouts/CenterBox';
import Header from '../../containers/sign/SignInContainer/Header';
import SignInFields from '../../containers/sign/SignInContainer/SignInFields';
import MockSignIn from '../../containers/sign/SignInContainer/MockSignIn';
import Footer from '../../containers/sign/SignInContainer/Footer';
import useHeader from '../../hooks/useHeader';

function SignIn() {
  useHeader(false);

  return (
    <CenterBox>
      <Stack
        justifyContent="center"
        alignItems="center"
        px={1}
      >
        <Header />
        <SignInFields />
        <MockSignIn />
        <Footer />
      </Stack>

    </CenterBox>
  );
}
export default SignIn;
