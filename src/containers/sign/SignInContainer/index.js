import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';
import { setHeaderOpenFalse, setHeaderOpenTrue } from '../../../utils/redux/common/commonSlice';
import CenterBox from '../../../components/layouts/CenterBox';
import Header from './component/Header';
import SignIn from './component/SignIn';
import MockSignIn from './component/MockSignIn';
import Footer from './component/Footer';

export default function SignInContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderOpenFalse()); // 페이지 진입 시 헤더 감추기
    return () => {
      dispatch(setHeaderOpenTrue()); // 페이지 탈출 시 헤더 복구
    };
  }, []);

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
