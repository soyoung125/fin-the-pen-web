import {
  Box,
  Button,
  Card, Stack, Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function ScheduleCard({ schedule }) {
  return (
    <Box px={1} mb={1}>
      <Card>
        <Stack direction="row" justifyContent="space-between" p={1}>
          <Stack>
            <Typography>{`○ ${schedule.start_time} - ${schedule.end_time}`}</Typography>
            <Typography>{`${schedule.event_name}`}</Typography>
          </Stack>
          <Button variant="text" size="small">
            <MoreVertIcon />
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}

export default ScheduleCard;
