import {
  Box, Button, Dialog, Grid, InputBase, Stack,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LogoCircle from '../../components/common/LogoCircle';
import CenterBox from '../../components/layouts/CenterBox';
import { selectIsAuthenticated, setIsAuthenticatedTrue } from '../../utils/redux/common/commonSlice';

function EasyAuthentication() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const input = useRef();
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(password);
  }, [password]);

  // console.log(input.current.value);
  return (
    <Dialog
      fullScreen
      open={!isAuthenticated}
    >
      <CenterBox>
        <Stack
          justifyContent="center"
          alignItems="center"
          px={1}
        >
          <LogoCircle />

          <Box my={2} sx={{ typography: 'h5', fontWeight: 'bold' }}>비밀번호 입력</Box>

          <Box sx={{ fontWeight: 'bold', fontSize: '17px', color: 'primary.main' }}>설정하신 PIN 6자리를 입력해주세요.</Box>

          <Box
            component="form"
          // onSubmit={handleSubmit}
            noValidate
            sx={{ maxWidth: '400px', width: '100%' }}
          >
            <InputBase sx={{ height: 0, width: 0, color: 'white' }} inputRef={input} onChange={(e) => setPassword(e.target.value)} />
            <Grid container spacing={1} mb={1}>
              {[...Array(6)].map(() => (
                <Grid item xs={2} key={Math.random()}>
                  <Box
                    sx={{
                      height: '56px',
                      border: '2px solid',
                      borderColor: 'primary.main',
                      borderRadius: 1,
                      backgroundColor: 'rgba(115, 91, 242, 0.6)',
                    }}
                    onClick={() => input.current.focus()}
                  >
                    <Box sx={{
                      color: 'white', fontSize: '45px', textAlign: 'center',
                    }}
                    >
                      *
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Button fullWidth variant="contained" onClick={() => dispatch(setIsAuthenticatedTrue())}>인증</Button>
          </Box>
        </Stack>
      </CenterBox>
    </Dialog>
  );
}

export default EasyAuthentication;
