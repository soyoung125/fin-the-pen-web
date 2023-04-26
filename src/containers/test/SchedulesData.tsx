import { useSelector } from 'react-redux';
import { selectSchedules } from '../../domain/redux/schedule/scheduleSlice';
import TestBox from './box/TestBox';

function SchedulesData() {
  const schedules = useSelector(selectSchedules);
  return (
    <TestBox title="Redux : selectSchedules">
      {JSON.stringify(schedules)}
    </TestBox>
  );
}
export default SchedulesData;
