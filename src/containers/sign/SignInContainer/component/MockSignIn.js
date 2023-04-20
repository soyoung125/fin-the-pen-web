import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { mockLogin, selectStatus } from '../../../../domain/redux/user/userSlice';

function MockSignIn() {
  const dispatch = useDispatch();
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
