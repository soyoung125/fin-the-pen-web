import { useSelector } from "react-redux";
import {
  selectFiltered,
  selectFilteredDate,
} from "@redux/slices/scheduleSlice.tsx";
import TestBox from "./box/TestBox";

function ScheduleFilterData() {
  const filtered = useSelector(selectFiltered);
  const filteredDate = useSelector(selectFilteredDate);
  return (
    <TestBox title="Redux : selectFiltered / selectFilteredDate">
      {JSON.stringify(filtered)}
      <br />
      {JSON.stringify(filteredDate)}
    </TestBox>
  );
}
export default ScheduleFilterData;
