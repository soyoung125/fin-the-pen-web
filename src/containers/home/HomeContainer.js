/* eslint-disable no-unused-vars */
import {
  Box,
  Divider,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Calender from '../../components/calender/Calender';
import ScheduleList from '../../components/calender/scheduleList/ScheduleList';
import { setHeaderOpenTrue } from '../../utils/redux/common/commonSlice';

function HomeConatiner() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderOpenTrue('home'));
  }, []);
  return (
    <Box>
      <Calender />
      <Divider />
      <ScheduleList />
    </Box>
  );
}
export default HomeConatiner;
