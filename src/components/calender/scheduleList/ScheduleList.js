import { List } from '@mui/material';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { selectDate, selectSchedules } from '../../../utils/redux/schedule/scheduleSlice';
import ScheduleCard from './ScheduleCard';

function ScheduleList() {
  const schedules = useSelector(selectSchedules);
  const date = moment(useSelector(selectDate)).format('YYYY-MM-DD');

  return (
    <List
      sx={{
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        flex: 1,
        '& ul': { padding: 0 },
      }}
    >
      {
        schedules.map((el) => (
          el.date === date ? <ScheduleCard schedule={el} key={Math.random()} /> : null
        ))
      }
    </List>
  );
}

export default ScheduleList;
