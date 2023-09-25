import { useSelector } from "react-redux";
import { selectGuestMode } from "@redux/slices/commonSlice.tsx";
import TestBox from "./box/TestBox";

function GuestMode() {
  const guestMode = useSelector(selectGuestMode);

  return (
    <TestBox title="Redux : selectGuestMode">
      {JSON.stringify(guestMode)}
    </TestBox>
  );
}
export default GuestMode;
