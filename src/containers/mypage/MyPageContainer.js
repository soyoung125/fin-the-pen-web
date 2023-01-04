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
  const userLogOut = () => {
    dispatch(logOut());
    // 로그아웃 하면서 추가로 해제해야 할 행동을 여기에서 해줘야 함
  };
  useEffect(() => {
    // 로그인 안된 계정은 로그인 페이지로 강제연결
    if (user === null) {
      navigate(PATH.signIn);
    }
  }, [user]);
  return (
    <Box>
      <Typography>다음 계정으로 로그인 되어있습니다.</Typography>
      <Typography>
        {JSON.stringify(user)}
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={() => userLogOut()}
      >
        로그아웃
      </Button>
    </Box>
  );
}
export default MyPageContainer;
