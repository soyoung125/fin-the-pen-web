import {
  Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography,
} from '@mui/material';
import moment from 'moment';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSchedules } from '../../../../utils/redux/schedule/scheduleSlice';
import Calender from './Calender';
import MonthlyStatement from './MonthlyStatement';
import ScheduleStatusCard from '../../../../components/assetManagement/ScheduleStatusCard';

function AssetPreview() {
  const schedules = useSelector(selectSchedules);
  const today = moment();

  const [expandAccordion, setExpandAccordion] = useState(false);

  const handleExpand = () => {
    setExpandAccordion(!expandAccordion);
  };
  return (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ mx: 2 }}>
        <MonthlyStatement />
      </Box>

      <Accordion expanded={expandAccordion} disableGutters elevation={0}>
        <AccordionSummary>
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>전체 내역</Typography>
            <Button onClick={handleExpand}>{expandAccordion ? '달력 닫기' : '달력 보기'}</Button>
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Calender dateHeight={85} />
        </AccordionDetails>
      </Accordion>

      <Box sx={{ mx: 2 }}>
        <ScheduleStatusCard
          month={today.format('M월')}
          numberOfSchedule={schedules.filter((s) => today.isSame(s.date, 'month') && today.isSameOrBefore(s.date, 'day')).length}
        />
      </Box>
    </Box>
  );
}
export default AssetPreview;
