import { List } from '@mui/material';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { selectDate, selectEvents } from '../../../utils/redux/event/eventSlice';
import EventCard from './EventCard';

function EventList() {
  const events = useSelector(selectEvents);
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
        events.map((e) => (
          e.date === date ? <EventCard event={e} key={Math.random()} /> : null
        ))
      }
    </List>
  );
}

export default EventList;
