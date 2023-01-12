/* eslint-disable no-unused-vars */
import {
  Box, Divider, Stack, Typography,
} from '@mui/material';
import { useState } from 'react';

function ScheduleCard({ schedule, setScheduleModalOpen, setSelectedSchedule }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleModal = () => {
    setSelectedSchedule(schedule);
    setScheduleModalOpen(true);
    setAnchorEl(null);
  };

  return (
    <>
      <Box fullwidth px={3} py={2} onClick={() => handleModal()}>
        <Stack direction="row">
          <Box
            sx={{
              width: '15px', height: '15px', border: '4px solid', borderRadius: 3, borderColor: schedule.category.color, marginY: 'auto', marginRight: 2,
            }}
          />
          <Typography variant="caption" fullwidth>{`${schedule.start_time} - ${schedule.end_time}`}</Typography>
        </Stack>
        <Typography variant="h6" pl={1} pt={1}>{schedule.event_name}</Typography>
      </Box>
      <Divider />
    </>

  );
}

export default ScheduleCard;
