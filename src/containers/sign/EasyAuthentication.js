import {
  Box, Button, Dialog, Grid, InputBase, Stack,
} from '@mui/material';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import LogoCircle from '../../components/common/LogoCircle';
import CenterBox from '../../components/layouts/CenterBox';
import { selectIsAuthenticated, setIsAuthenticatedTrue } from '../../utils/redux/common/commonSlice';

function EasyAuthentication() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const input = useRef();

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
            <InputBase sx={{ height: 0, color: 'white' }} inputRef={input} />
            <Grid container spacing={1} mb={1}>
              <Grid item xs={2}>
                <Box sx={{
                  height: '56px', border: '2px solid', borderColor: 'primary.main', borderRadius: 1, backgroundColor: 'rgba(115, 91, 242, 0.6)',
                }}
                >
                  <StarIcon sx={{ color: 'white' }} />
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box sx={{
                  height: '56px', border: '2px solid', borderColor: 'primary.main', borderRadius: 1,
                }}
                >
                  *
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box sx={{
                  height: '56px', border: '2px solid', borderColor: 'primary.main', borderRadius: 1,
                }}
                >
                  *
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box sx={{
                  height: '56px', border: '2px solid', borderColor: 'primary.main', borderRadius: 1,
                }}
                >
                  *
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box sx={{
                  height: '56px', border: '2px solid', borderColor: 'primary.main', borderRadius: 1,
                }}
                >
                  *
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box sx={{
                  height: '56px', border: '2px solid', borderColor: 'primary.main', borderRadius: 1,
                }}
                >
                  *
                </Box>
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
