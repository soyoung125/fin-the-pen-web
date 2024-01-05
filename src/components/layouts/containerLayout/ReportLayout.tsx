import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import moment from "moment";
import EasyAuthentication from "@components/sign/EasyAuthentication";
import {setSelectedDate} from "@redux/slices/scheduleSlice.tsx";
import {useAppDispatch, useAppSelector} from "@redux/hooks.ts";
import {selectIsAuthenticated} from "@redux/slices/commonSlice.tsx";

function ReportLayout() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSelectedDate(moment(new Date())));
  }, []);

  if (!isAuthenticated) {
    return <EasyAuthentication/>;
  }

  return (
    <Box>
      <Outlet/>
    </Box>
  );
}

export default ReportLayout;
