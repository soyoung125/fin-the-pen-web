import {
  Button, Paper, Stack, Typography,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import moment from 'moment';

function SpendingDetailCard({ schedule }) {
  return (
    <Paper sx={{ marginY: 1, padding: 1 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>{moment(schedule.date).format('MM월 DD일')}</Typography>
        <Typography>{schedule.event_name}</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography>
          <AccessTimeIcon fontSize="small" />
          {schedule.start_time}
        </Typography>
        <Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              borderRadius: 5, minWidth: 0, width: '20px', height: '20px',
            }}
          >
            {schedule.type}
          </Button>
          {schedule.expected_spending}
        </Typography>
      </Stack>
    </Paper>
  );
}

export default SpendingDetailCard;
