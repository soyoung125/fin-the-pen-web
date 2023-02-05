import {
  Box, Grid, IconButton, Paper, Stack,
} from '@mui/material';
import { useSelector } from 'react-redux';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { selectUser } from '../../../utils/redux/user/userSlice';
import { NOTHING_IS_HERE_YET } from '../../../utils/constants/common';

function SavingsGoal() {
  const user = useSelector(selectUser);

  return (
    <>
      <Box sx={{ fontWeight: 'bold' }}>
        {`"${user.name}"님의 한해 저축 목표입니다.`}
      </Box>

      <Paper sx={{ p: 2, mt: 1, mb: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>1 Year Goal</Box>
          <IconButton color="primary" onClick={() => alert(NOTHING_IS_HERE_YET)}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Box sx={{
          typography: 'h6', fontWeight: 'bold', my: 1, p: 2, border: '2px solid', borderRadius: 2, borderColor: 'primary.main', color: 'primary.main', textAlign: 'end',
        }}
        >
          xxxxxxx원
        </Box>
        <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>1 Month Goal</Box>
        <Box sx={{
          typography: 'h6', fontWeight: 'bold', my: 1, p: 2, border: '2px solid', borderRadius: 2, borderColor: 'primary.main', color: 'primary.main', textAlign: 'end',
        }}
        >
          xxxxxxx원
        </Box>
      </Paper>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ fontWeight: 'bold' }}>
          당신의 또 다른 목표는 무엇인가요?
        </Box>
        <IconButton color="primary" onClick={() => alert(NOTHING_IS_HERE_YET)}>
          <BorderColorIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Grid container spacing={1} textAlign="center" mt={0}>
        <Grid item xs={6}>
          <Stack
            justifyContent="space-around"
            sx={{
              borderRadius: 2, backgroundColor: 'primary.main', color: 'white', p: 2, height: '100%',
            }}
          >
            <Box mb={2}>나의 목표</Box>
            <Box>i-Mac</Box>
            <Box>xxxxxxx원</Box>
          </Stack>
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
            <Box sx={{ color: 'primary.main' }}>YY/MM/DD</Box>
          </Stack>
          <Box sx={{
            borderRadius: 2, border: '2px solid', borderColor: 'primary.main', p: 2,
          }}
          >
            <Box mb={1}>핀더펜 MONEY</Box>
            <Box sx={{ color: 'primary.main' }}>xxxxxxx원</Box>
          </Box>
        </Grid>
      </Grid>

    </>
  );
}

export default SavingsGoal;
