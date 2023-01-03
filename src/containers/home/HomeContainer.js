/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Card,
  Divider, List, Stack, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Calender from '../../components/calender/Calender';
import { selectEvents } from '../../utils/redux/event/eventSlice';

function HomeConatiner() {
  // temp
  const events = useSelector(selectEvents);
  console.log(events);
  return (
    <Box>
      <Calender />
      <Divider />
      <List
        key={Math.random()}
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
            <Box px={1} mb={1}>
              <Card>
                <Stack direction="row" justifyContent="space-between" p={1}>
                  <Stack>
                    <Typography>{`○ ${e.start_time} - ${e.end_time}`}</Typography>
                    <Typography>{`${e.event_name}`}</Typography>
                  </Stack>
                  <Button variant="text" size="small">
                    <MoreVertIcon />
                  </Button>
                </Stack>
              </Card>
            </Box>
          ))
        }
      </List>
    </Box>
  );
}
export default HomeConatiner;
