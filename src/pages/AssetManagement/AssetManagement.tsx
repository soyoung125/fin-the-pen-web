/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { Alert, Box } from "@mui/material";
import moment from "moment/moment";
import { useEffect } from "react";
import ScheduleStatusCard from "../../components/assetManagement/ScheduleStatusCard";
import SettingsPaper from "../../components/assetManagement/SettingsPaper";
import useSchedule from "../../hooks/useSchedule";
import useHeader from "../../hooks/useHeader";
import { useRecoilValue } from "recoil";
import { isAuthenticatedRepository } from "../../app/recoil/isAuthenticated.ts";
import { useSelector } from "react-redux";
import { selectUser } from "@redux/slices/userSlice.tsx";
import { HEADER_MODE } from "@type/common.tsx";

function AssetManagement() {
  const { schedules } = useSchedule();
  const user = useSelector(selectUser);
  const today = moment();
  const { setIsAuthenticatedFalse } = useRecoilValue(isAuthenticatedRepository);

  useHeader(true, HEADER_MODE.home);

  useEffect(() => {
    setIsAuthenticatedFalse();
  }, []);

  return (
    <Box sx={{ m: 3, wordBreak: "keep-all" }}>
      {user ? (
        <>
          <Box sx={{ typography: "h5", fontWeight: "bold" }}>
            {`핀더팬과 함께 "${user.name}" 님의 자산과 일정을 관리하세요`}
          </Box>
          <SettingsPaper />

          <ScheduleStatusCard
            month={today.format("M월")}
            numberOfSchedule={
              schedules.filter(
                (s) =>
                  today.isSame(s.date, "month") &&
                  today.isSameOrBefore(
                    moment(s.date + s.start_time, "YYYY-MM-DDhh:mm")
                  )
              ).length
            }
          />
        </>
      ) : (
        <Alert severity="error">로그인이 필요한 페이지입니다.</Alert>
      )}
    </Box>
  );
}

export default AssetManagement;
