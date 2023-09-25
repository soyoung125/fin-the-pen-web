import { useSelector } from "react-redux";
import { selectSchedule } from "@redux/slices/scheduleSlice.tsx";
import TestBox from "./box/TestBox";

function ScheduleData() {
  const schedule = useSelector(selectSchedule);
  return (
    <TestBox title="Redux : selectSchedule">{JSON.stringify(schedule)}</TestBox>
  );
}
export default ScheduleData;
