import TestBox from "./box/TestBox";
import { useSelector } from "react-redux";
import { selectUser } from "@redux/slices/userSlice.tsx";

function UserData() {
  const user = useSelector(selectUser);

  return <TestBox title="Recoil : userState">{JSON.stringify(user)}</TestBox>;
}
export default UserData;
