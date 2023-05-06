import { Divider } from '@mui/material';
import Calender from './HomeContainer/view/Calender';
import ScheduleList from './HomeContainer/view/ScheduleList';

function ScheduleView() {
  return (
    <>
      <Calender dateHeight={50} />
      <Divider />
      <ScheduleList />
    </>
  );
}
export default ScheduleView;
