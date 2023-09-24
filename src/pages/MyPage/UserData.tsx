import TestBox from "./box/TestBox";
import { useRecoilValue } from "recoil";
import { userState } from "@recoil/user.ts";

function UserData() {
  const user = useRecoilValue(userState);

  return <TestBox title="Recoil : userState">{JSON.stringify(user)}</TestBox>;
}
export default UserData;
