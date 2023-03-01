import { Stack } from '@mui/material';
import CenterBox from '../../../components/layouts/CenterBox';
import Header from './component/Header';
import SignIn from './component/SignIn';
import MockSignIn from './component/MockSignIn';
import Footer from './component/Footer';
import useHeader from '../../../utils/hooks/useHeader';

export default function SignInContainer() {
  useHeader(false);

  return (
    <CenterBox>
      <Stack
        justifyContent="center"
        alignItems="center"
        px={1}
      >
        <Header />
        <SignIn />
        <MockSignIn />
        <Footer />
      </Stack>

    </CenterBox>
  );
}
