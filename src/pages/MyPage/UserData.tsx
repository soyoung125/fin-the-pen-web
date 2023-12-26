import TestBox from "./box/TestBox";
import { useSelector } from "react-redux";
import { selectUser } from "@redux/slices/userSlice.tsx";
import { useUser } from "@app/tanstack-query/useUser.ts";

function UserData() {
  const reduxUser = useSelector(selectUser);
  const { data: reactQueryUser } = useUser();

  return (
    <>
      <TestBox title="Redux : selectUser">{JSON.stringify(reduxUser)}</TestBox>
      <TestBox title="tanstack-query : useUser">
        {JSON.stringify(reactQueryUser)}
      </TestBox>
    </>
  );
}

export default UserData;
