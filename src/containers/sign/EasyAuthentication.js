import {
  Box, Button, Dialog, Grid, Stack, TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import LogoCircle from '../../components/common/LogoCircle';
import CenterBox from '../../components/layouts/CenterBox';
import { selectIsAuthenticated, setIsAuthenticatedTrue } from '../../utils/redux/common/commonSlice';

function EasyAuthentication() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
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
            sx={{ maxWidth: '400px', mx: 2 }}
          >
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <TextField
                  margin="normal"
                  required
                  name="pwd1"
                  type="pwd1"
                  id="pwd1"
                  autoComplete="current-password"
                  autoFocus
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  margin="normal"
                  hiddenLabel
                  required
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  margin="normal"
                  hiddenLabel
                  required
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  margin="normal"
                  hiddenLabel
                  required
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  margin="normal"
                  hiddenLabel
                  required
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  margin="normal"
                  hiddenLabel
                  required
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>

            <Button fullWidth variant="contained" onClick={() => dispatch(setIsAuthenticatedTrue())}>인증</Button>
          </Box>
        </Stack>
      </CenterBox>
    </Dialog>
  );
}

export default EasyAuthentication;
