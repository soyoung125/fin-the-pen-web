import { Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import TestBox from '../../components/test/TestBox';
import { selectFiltered, selectFilteredDate } from '../../utils/redux/schedule/scheduleSlice';

function ScheduleFilterData() {
  const filtered = useSelector(selectFiltered);
  const filteredDate = useSelector(selectFilteredDate);
  return (
    <TestBox title="Redux : selectFiltered / selectFilteredDate">
      {JSON.stringify(filtered)}
      <Divider />
      {JSON.stringify(filteredDate)}
    </TestBox>
  );
}
export default ScheduleFilterData;
