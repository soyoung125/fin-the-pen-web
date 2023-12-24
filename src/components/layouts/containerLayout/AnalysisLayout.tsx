import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import moment from "moment";
import EasyAuthentication from "../../../containers/sign/EasyAuthentication";
import { setSelectedDate } from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import { selectIsAuthenticated } from "@redux/slices/commonSlice.tsx";

function AnalysisLayout() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSelectedDate(moment(new Date())));
  }, []);

  if (!isAuthenticated) {
    return <EasyAuthentication />;
  }

  return (
    <Box bgcolor="#F7F7F8">
      <Box height="100vh">
        <Outlet />
      </Box>
    </Box>
  );
}

export default AnalysisLayout;
