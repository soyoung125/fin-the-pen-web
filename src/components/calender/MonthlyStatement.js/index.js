/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {
  Box, Grid, IconButton, Paper, Stack, Typography,
} from '@mui/material';
import { lightBlue, pink } from '@mui/material/colors';
import moment from 'moment';
import { useSelector } from 'react-redux';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { selectDate, selectSchedules } from '../../../utils/redux/schedule/scheduleSlice';
import { calculateIncomeExpenditure } from '../../../utils/tools';
import StatementCard from './StatementCard';
import StatusStack from '../../assetManagement/ScheduleStatusCard/StatusStack';
import SwitchingHeader from '../../common/SwitchingHeader';
import RoundedPaper from '../../common/RoundedPaper';

function MonthlyStatement() {
  const schedules = useSelector(selectSchedules);
  const date = useSelector(selectDate);

  return (
    <RoundedPaper>
      <SwitchingHeader>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{`${moment(date).format('M')}월`}</Typography>
        <Typography variant="caption">자산내역</Typography>
      </SwitchingHeader>

      <Box sx={{
        marginTop: 3, border: '2px solid', borderRadius: 2, borderColor: 'primary.main',
      }}
      >
        <Stack direction="row">
          <StatusStack
            title="수입"
            content={calculateIncomeExpenditure(schedules, moment(date), 'month', '+')}
          />

          <StatusStack
            title="지출"
            content={calculateIncomeExpenditure(schedules, moment(date), 'month', '-')}
          />
        </Stack>
      </Box>
    </RoundedPaper>
  );
}

export default MonthlyStatement;
