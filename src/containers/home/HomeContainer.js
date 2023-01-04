/* eslint-disable no-unused-vars */
import {
  Box,
  Divider,
} from '@mui/material';
import Calender from '../../components/calender/Calender';
import ScheduleList from '../../components/calender/scheduleList/ScheduleList';

function HomeConatiner() {
  // temp
  return (
    <Box>
      <Calender />
      <Divider />
      <ScheduleList />
    </Box>
  );
}
export default HomeConatiner;
