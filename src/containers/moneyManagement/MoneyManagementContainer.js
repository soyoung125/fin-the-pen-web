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
import SettingsPaper from '../../components/momeyManagement/SettingsPaper';
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

      <SettingsPaper />

      <Box sx={{ typography: 'h4', fontWeight: 'bold' }}>
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
