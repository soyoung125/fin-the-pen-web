import { useEffect } from "react";
import moment from "moment";
import { Box } from "@mui/material";
import {
  changeViewMode,
  getMonthSchedules,
  selectDate,
  selectViewMode,
} from "../../app/redux/slices/scheduleSlice";
import {
  selectGuestMode,
  setIsAuthenticatedFalse,
} from "../../app/redux/slices/commonSlice";
import useHeader from "../../hooks/useHeader";
import ConsumptionAlert from "../../containers/home/HomeContainer/layout/ConsumptionAlert";
import ScheduleViewMode from "../../containers/home/HomeContainer/layout/ScheduleViewMode";
import ScheduleView from "../../containers/home/ScheduleView";
import AssetView from "../../containers/home/AssetView";
import { VIEW_MODE } from "../../constants/schedule";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import { selectIsBudgetHidden } from "../../app/redux/slices/settingSlice";
import { useSelector } from "react-redux";
import { selectUser } from "@redux/slices/userSlice.tsx";
import { HEADER_MODE } from "@type/common.tsx";

function Home() {
  const dispatch = useAppDispatch();
  const viewMode = useAppSelector(selectViewMode);
  const date = useAppSelector(selectDate);
  const user = useSelector(selectUser);
  const guestMode = useAppSelector(selectGuestMode);
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
        date: moment(date).format("YYYY-MM"),
      };
      // 버그 있을 수 있음
      dispatch(getMonthSchedules(query)); // help me
    }
  };

  useEffect(() => {
    // 게스트 모드가 아닌 경우에만 서버에 데이터를 요청
    // TODO: 게스트 모드에서도 서버에 데이터를 요청하도록 수정예정
    if (user && !guestMode) {
      getSchedules();
    }
  }, [date]);

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
