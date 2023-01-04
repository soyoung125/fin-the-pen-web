/* eslint-disable no-unused-vars */
import {
  Box,
  Divider,
} from '@mui/material';
import Calender from '../../components/calender/Calender';
import EventList from '../../components/calender/eventList/EventList';

function HomeConatiner() {
  // temp
  return (
    <Box>
      <Calender />
      <Divider />
      <EventList />
    </Box>
  );
}
export default HomeConatiner;
