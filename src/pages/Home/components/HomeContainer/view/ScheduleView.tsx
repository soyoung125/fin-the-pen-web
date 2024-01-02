import { Divider } from "@mui/material";
import Calender from "./Calender";
import ScheduleList from "./ScheduleList";

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
