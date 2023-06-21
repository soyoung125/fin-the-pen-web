import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { mockLogin, selectStatus } from '../../../app/redux/slices/userSlice';
import { useAppDispatch } from '../../../app/redux/hooks';

function MockSignIn() {
  const dispatch = useAppDispatch();
  const status = useSelector(selectStatus);

  const guestLogin = () => {
    dispatch(mockLogin());
    // 추가로 이런 저런 설정을 여기에서 해줘야 함.
  };
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="error"
      sx={{ mt: 3, mb: 2 }}
      onClick={() => guestLogin()}
    >
      {status === 'idle' ? 'Guest 계정으로 로그인 하기' : '로그인 중 ...'}
    </Button>
  );
}
export default MockSignIn;
