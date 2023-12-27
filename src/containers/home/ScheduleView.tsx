import { Divider } from "@mui/material";
import Calender from "./HomeContainer/view/Calender";
import ScheduleList from "./HomeContainer/view/ScheduleList";
import ScheduleList2 from "./HomeContainer/view/ScheduleList/ScheduleList2";

function ScheduleView() {
  return (
    <>
      <Calender dateHeight={50} />
      <Divider />
      <ScheduleList2 />
      {/* <ScheduleList /> */}
    </>
  );
}
export default ScheduleView;
