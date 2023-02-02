import {
  Box, Grid, Paper, Stack,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../utils/redux/user/userSlice';

function SavingsGoal() {
  const user = useSelector(selectUser);

  return (
    <>
      <Box sx={{ typography: 'h5', fontWeight: 'bold' }}>
        {`"${user.name}"님의 한해 저축 목표입니다.`}
      </Box>

      <Paper sx={{ p: 2, mt: 1, mb: 3 }}>
        <Box sx={{ typography: 'h4', fontWeight: 'bold' }}>1 Year Goal</Box>
        <Box sx={{
          typography: 'h4', fontWeight: 'bold', my: 2, p: 3, border: '2px solid', borderRadius: 2, borderColor: 'primary.main', color: 'primary.main', textAlign: 'end',
        }}
        >
          xxxxxxx원
        </Box>
        <Box sx={{ typography: 'h4', fontWeight: 'bold' }}>1 Month Goal</Box>
        <Box sx={{
          typography: 'h4', fontWeight: 'bold', my: 2, p: 3, border: '2px solid', borderRadius: 2, borderColor: 'primary.main', color: 'primary.main', textAlign: 'end',
        }}
        >
          xxxxxxx원
        </Box>
      </Paper>

      <Box sx={{ typography: 'h5', fontWeight: 'bold' }}>
        당신의 또 다른 목표는 무엇인가요?
      </Box>

      <Box>
        <Grid container spacing={2} textAlign="center">
          <Grid item xs={6}>
            <Box sx={{
              borderRadius: 2, backgroundColor: 'primary.main', color: 'white', fontWeight: 'bold', p: 2,
            }}
            >
              <Box>나의 목표</Box>
              <Box>i-Mac</Box>
              <Box>xxxxxxx원</Box>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                borderRadius: 2, border: '2px solid', borderColor: 'primary.main', p: 2, mb: 1,
              }}
            >
              <Box>기간</Box>
              <Box>YY/MM/DD</Box>
            </Stack>
            <Box sx={{
              borderRadius: 2, border: '2px solid', borderColor: 'primary.main', p: 2, mb: 1,
            }}
            >
              <Box>핀더펜 MONEY</Box>
              <Box>xxxxxxx원</Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </>
  );
}

export default SavingsGoal;
