import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PATH from '../../utils/constants/path';
import { logOut, selectUser } from '../../utils/redux/user/userSlice';
// import SignInContainer from '../sign/SignInContainer';

function MyPageContainer() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // 로그인 안된 계정은 로그인 페이지로 강제연결
    if (user === null) {
      navigate(PATH.signIn);
    }
  }, [user]);
  return (
    <Box>
      <Typography>다음 계정으로 로그인 되어있습니다.</Typography>
      {JSON.stringify(user)}
      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch(logOut())}
      >
        로그아웃
      </Button>
    </Box>
  );
}
export default MyPageContainer;
