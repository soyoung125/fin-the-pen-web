/* eslint-disable no-unused-vars */
import {
  Box, CardActionArea, Divider, Stack, Typography,
} from '@mui/material';
import { useState } from 'react';

function ScheduleCard({ schedule, handleModal, category }) {
  return (
    <>
      <CardActionArea onClick={() => handleModal(schedule)}>
        <Box sx={{ width: '100vw', justifyContent: 'start' }}>
          <Box px={3} py={2}>
            <Stack direction="row">
              <Box
                sx={{
                  width: '15px', height: '15px', border: '4px solid', borderRadius: 3, borderColor: category.color, marginY: 'auto', marginRight: 2,
                }}
              />
              <Typography variant="caption">{`${schedule.start_time} - ${schedule.end_time}`}</Typography>
            </Stack>
            <Stack
              direction="row"
              pl={1}
              pt={1}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                variant="h6"
                noWrap
              >
                {schedule.event_name}
              </Typography>
              <Typography>
                {`${schedule.type}${schedule.expected_spending.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </CardActionArea>
      <Divider />
    </>

  );
}

export default ScheduleCard;
