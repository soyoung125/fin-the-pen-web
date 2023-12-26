import { useEffect } from "react";
import { Box } from "@mui/material";
import {
  changeViewMode,
  getMonthSchedules,
  selectMonth,
  selectViewMode,
} from "@redux/slices/scheduleSlice.tsx";
import { setIsAuthenticatedFalse } from "@redux/slices/commonSlice.tsx";
import useHeader from "../../hooks/useHeader";
import ConsumptionAlert from "../../containers/home/HomeContainer/layout/ConsumptionAlert";
import ScheduleViewMode from "../../containers/home/HomeContainer/layout/ScheduleViewMode";
import ScheduleView from "../../containers/home/ScheduleView";
import AssetView from "../../containers/home/AssetView";
import { VIEW_MODE } from "../../constants/schedule";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import { selectIsBudgetHidden } from "@redux/slices/settingSlice.ts";
import { HEADER_MODE } from "@type/common.tsx";
import { useUser } from "@app/tanstack-query/useUser.ts";

function Home() {
  const dispatch = useAppDispatch();
  const viewMode = useAppSelector(selectViewMode);
  const month = useAppSelector(selectMonth);
  const { data: user } = useUser();
  const isHideBudgetMode = useAppSelector(selectIsBudgetHidden);

  useEffect(() => {
    dispatch(changeViewMode(VIEW_MODE.schedule));
    if (isHideBudgetMode) {
      dispatch(setIsAuthenticatedFalse());
    }
  }, []);

  useHeader(true, HEADER_MODE.home);

  const getSchedules = () => {
    if (user) {
      // type guard
      const query = {
        user_id: user.user_id,
        date: month,
      };
      // 버그 있을 수 있음
      dispatch(getMonthSchedules(query)); // help me
    }
  };

  useEffect(() => {
    getSchedules();
  }, [month]);

  return (
    <Box>
      <ConsumptionAlert />
      {viewMode === VIEW_MODE.schedule && <ScheduleView />}
      {viewMode === VIEW_MODE.asset && <AssetView />}
      <ScheduleViewMode />
    </Box>
  );
}

export default Home;
