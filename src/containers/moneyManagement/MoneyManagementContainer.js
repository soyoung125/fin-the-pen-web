/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {
  Box, Grid, Paper, Stack,
} from '@mui/material';
import {
  lightBlue, pink, teal, yellow,
} from '@mui/material/colors';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../../utils/constants/categories';
import { selectSchedules } from '../../utils/redux/schedule/scheduleSlice';

function MoneyManagementContainer() {
  const schedules = useSelector(selectSchedules);
  const today = moment();

  console.log(schedules.filter((s) => today.isSame(s.date, 'month')));

  return (
    <Box sx={{ m: 3 }}>
      {/* 자산 관리
      {
        CATEGORIES.map((cat) => <div key={Math.random()}>{JSON.stringify(cat)}</div>)
      } */}
      <Box sx={{ typography: 'h4', fontWeight: 'bold' }}>
        핀더팬과 함께 &quot;OOO&quot; 님의
        <br />
        자산과 일정을 관리하세요
      </Box>

      <Paper sx={{ marginY: 2, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{
              backgroundColor: pink[200], paddingY: 5, borderRadius: 4, display: 'flex', justifyContent: 'center',
            }}
            >
              저축 목표 금액 설정
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{
              backgroundColor: yellow[200], paddingY: 5, borderRadius: 4, display: 'flex', justifyContent: 'center',
            }}
            >
              정기 입출금액 설정
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{
              backgroundColor: lightBlue[200], paddingY: 5, borderRadius: 4, display: 'flex', justifyContent: 'center',
            }}
            >
              카테고리별 자산 설정
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{
              backgroundColor: teal[200], paddingY: 5, borderRadius: 4, display: 'flex', justifyContent: 'center',
            }}
            >
              일정 관리
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ typography: 'h4', fontWeight: 'bold', marginTop: 5 }}>
        My 스케줄 현황
      </Box>

      <Box sx={{
        marginTop: 3, border: '2px solid', borderRadius: 2, borderColor: 'primary.main',
      }}
      >
        <Stack direction="row">
          <Stack width="50%" sx={{ textAlign: 'center', paddingY: 2 }}>
            <Box>{`${today.format('M월')} 남은 일정`}</Box>
            <Box sx={{
              typography: 'h4', fontWeight: 'bold', color: 'primary.main', marginTop: 2,
            }}
            >
              {`${schedules.filter((s) => today.isSame(s.date, 'month') && today.isSameOrBefore(s.date, 'day')).length}개`}
            </Box>
          </Stack>

          <Stack width="50%" sx={{ textAlign: 'center', paddingY: 2 }}>
            <Box>추천 소비 금액</Box>
            <Box sx={{
              typography: 'h4', fontWeight: 'bold', color: 'primary.main', marginTop: 2,
            }}
            >
              xxxxx원
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default MoneyManagementContainer;
