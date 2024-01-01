import { Divider } from "@mui/material";
import Calender from "@containers/home/HomeContainer/view/Calender";
import ScheduleList from "@containers/home/HomeContainer/view/ScheduleList";

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
