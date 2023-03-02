import { Box, Stack, Typography } from '@mui/material';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate, selectedDate } from '../../utils/redux/schedule/scheduleSlice';
import SwitchingHeader from '../common/SwitchingHeader';

function AnalysisHeader() {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  return (
    <Stack justifyContent="center">
      <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>카테고리별 소비 현황</Typography>
      <SwitchingHeader
        justifyContent="center"
        handleClickLeftArrow={() => dispatch(selectedDate(moment(date).subtract(1, 'months')))}
        handleClickRightArrow={() => dispatch(selectedDate(moment(date).add(1, 'months')))}
      >
        <Box sx={{ typography: 'caption', mx: 1 }}>{`${date.format('YYYY년 M월')}`}</Box>
      </SwitchingHeader>
    </Stack>
  );
}

export default AnalysisHeader;
