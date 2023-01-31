import { Box, Grid, Paper } from '@mui/material';
import {
  lightBlue, pink, teal, yellow,
} from '@mui/material/colors';

function SettingsPaper() {
  return (
    <Paper sx={{
      marginTop: 2, marginBottom: 5, padding: 2, textAlign: 'center',
    }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{
            backgroundColor: pink[200], paddingY: 5, borderRadius: 4,
          }}
          >
            저축 목표 금액 설정
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{
            backgroundColor: yellow[200], paddingY: 5, borderRadius: 4,
          }}
          >
            정기 입출금액 설정
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{
            backgroundColor: lightBlue[200], paddingY: 5, borderRadius: 4,
          }}
          >
            카테고리별 자산 설정
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{
            backgroundColor: teal[200], paddingY: 5, borderRadius: 4,
          }}
          >
            일정 관리
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default SettingsPaper;
