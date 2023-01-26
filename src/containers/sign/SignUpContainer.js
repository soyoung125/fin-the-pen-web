/* eslint-disable no-unused-vars */
import {
  Avatar, Box, Button, Container, CssBaseline, InputAdornment, TextField, Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setHeaderOpenFalse, setHeaderOpenTrue } from '../../utils/redux/common/commonSlice';
import { fetchSignUp } from '../../utils/redux/API';

function SignUpContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setHeaderOpenFalse()); // 페이지 진입 시 헤더 감추기
    return () => {
      dispatch(setHeaderOpenTrue()); // 페이지 탈출 시 헤더 복구
    };
  }, []);

  const signUp = async (user) => {
    const result = await fetchSignUp(user);
    // 에러 핸들링
    if (result === undefined) {
      alert('서버에서 응답이 없습니다. GUEST 계정으로 로그인 하세요.');
      return;
    }
    if (result) {
      alert('회원 가입이 완료됐습니다.');
      navigate('/sign-in');
    } else {
      alert('중복된 아이디 입니다.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      user_id: data.get('email'),
      password: data.get('password'),
      name: data.get('name'),
      phone_number: data.get('phoneNumber'),
    };
    const invalidIndex = Object.values(user).findIndex((v) => v === '');
    if (invalidIndex === -1) {
      signUp(user);
    } else {
      alert('모든 칸을 입력해주세요');
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          계정 가입
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="성명"
            name="name"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일 주소"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" size="small">사용가능</Button>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            label="전화번호"
            name="phoneNumber"
            autoFocus
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" size="small">인증완료</Button>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            회원가입
          </Button>

        </Box>
      </Box>
    </Container>
  );
}
export default SignUpContainer;
/**
 * 회원가입 페이지
 */
