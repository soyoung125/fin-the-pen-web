import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import moment from "moment";
import EasyAuthentication from "../../../containers/sign/EasyAuthentication";
import { setSelectedDate } from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import { selectIsBudgetHidden } from "@redux/slices/settingSlice.ts";

import AnalysisHeader from "@containers/analysis/AnalysisHeader.tsx";
import {
  selectIsAuthenticated,
  setIsAuthenticatedFalse,
} from "@redux/slices/commonSlice.tsx";

function AnalysisLayout() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isHideBudgetMode = useAppSelector(selectIsBudgetHidden);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isHideBudgetMode) {
      dispatch(setIsAuthenticatedFalse());
    }
    dispatch(setSelectedDate(moment(new Date())));
  }, []);

  if (!isAuthenticated) {
    return <EasyAuthentication />;
  }

  return (
    <Box sx={{ mt: 2 }}>
      <AnalysisHeader />

      <Box sx={{ my: 3, wordBreak: "keep-all", fontWeight: "bold" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default AnalysisLayout;
