import {
  Box,
  Button,
  Card,
  List, Stack, Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { selectEvents } from '../../../utils/redux/event/eventSlice';

function EventList() {
  const events = useSelector(selectEvents);

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
          <Box px={1} mb={1} key={Math.random()}>
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
  );
}

export default EventList;
