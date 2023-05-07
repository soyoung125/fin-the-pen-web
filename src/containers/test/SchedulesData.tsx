import TestBox from './box/TestBox';
import useSchedule from '../../hooks/useSchedule';

function SchedulesData() {
  const { schedules } = useSchedule();
  return (
    <TestBox title="Redux : selectSchedules">
      {JSON.stringify(schedules)}
    </TestBox>
  );
}
export default SchedulesData;
