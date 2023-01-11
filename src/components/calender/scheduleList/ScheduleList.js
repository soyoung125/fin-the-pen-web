import {
  Box, List, Stack, Typography,
} from '@mui/material';
import moment from 'moment';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDate, selectSchedules } from '../../../utils/redux/schedule/scheduleSlice';
import ModalStaticBackdrop from '../../layouts/ModalStaticBackdrop';
import ScheduleCard from './ScheduleCard';
import ScheduleModal from './ScheduleModal';

function ScheduleList() {
  const schedules = useSelector(selectSchedules);
  const date = moment(useSelector(selectDate)).format('YYYY-MM-DD');
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);

  return (
    <>
      {schedules.filter((el) => el.date === date).length === 0 && (
        <Stack
          justifyContent="center"
          alignItems="center"
        >
          <Box my={5}>
            <Typography>
              {date}
              에 등록된 일정이 없습니다!
            </Typography>
          </Box>
        </Stack>
      )}
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
          schedules
            .filter((el) => el.date === date)
            .map((el) => (
              <ScheduleCard
                schedule={el}
                key={Math.random()}
                setScheduleModalOpen={setScheduleModalOpen}
                setSelectedSchedule={setSelectedSchedule}
              />
            ))
        }
      </List>
      <ModalStaticBackdrop
        keepMounted
        width="xl"
        open={scheduleModalOpen}
        component={(
          <ScheduleModal
            selectedSchedule={selectedSchedule}
            setScheduleModalOpen={setScheduleModalOpen}
          />
          // <Box p={1}>
          //   {
          //   selectedSchedule
          //   && (
          //     <>
          //       <Typography>
          //         {selectedSchedule.event_name}
          //       </Typography>
          //       <Typography>
          //         {selectedSchedule.date}
          //       </Typography>
          //       <Typography>
          //         {selectedSchedule.start_time}
          //       </Typography>
          //       <Typography>
          //         {selectedSchedule.end_time}
          //       </Typography>
          //       <Typography>
          //         {JSON.stringify(selectedSchedule.categories)}
          //       </Typography>
          //       <Typography>
          //         {selectedSchedule.type}
          //       </Typography>
          //       <Typography>
          //         {selectedSchedule.expected_spending}
          //       </Typography>
          //       <Typography>
          //         {selectedSchedule.importance}
          //       </Typography>
          //       <Typography>
          //         {JSON.stringify(selectedSchedule.exclusion)}
          //       </Typography>

          //     </>
          //   )
          //   }
          //   <Stack direction="row" spacing={1}>
          //     <Button
          //       variant="contained"
          //       color="error"
          //       fullWidth
          //       onClick={() => setScheduleModalOpen(false)}
          //     >
          //       삭제
          //     </Button>
          //     <Button
          //       variant="contained"
          //       fullWidth
          //       onClick={() => setScheduleModalOpen(false)}
          //     >
          //       확인
          //     </Button>
          //   </Stack>

          // </Box>
        )}
      />
    </>
  );
}

export default ScheduleList;
