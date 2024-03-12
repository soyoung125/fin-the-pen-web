import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import PaidIcon from "@mui/icons-material/Paid";
import moment from "moment";
import { INIT_SCHEDULE } from "@constants/schedule.ts";
import { changeViewMode, selectDate } from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import {
  selectBottomBarOpen,
  selectBottomDrawerTabMenu,
  setBottomDrawerTabMenu,
} from "@redux/slices/commonSlice.tsx";
import { PATH } from "@constants/path.ts";
import { useScheduleDrawer } from "@hooks/useScheduleDrawer.tsx";

function BottomBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { openScheduleDrawer } = useScheduleDrawer();

  const date = useAppSelector(selectDate);
  const bottomTabMenu = useAppSelector(selectBottomDrawerTabMenu);
  const bottomBarOpen = useAppSelector(selectBottomBarOpen);

  return (
    <BottomNavigation
      showLabels
      value={bottomTabMenu}
      onChange={(event: React.SyntheticEvent, newValue: any) => {
        dispatch(setBottomDrawerTabMenu(newValue));
      }}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        pt: 1.5,
        pb: "22px",
        px: 4,
        zIndex: 10,
        display: bottomBarOpen ? "flex" : "none",
        backgroundColor: "#FFF",
        height: "auto",
      }}
    >
      <BottomNavigationAction
        label="홈"
        icon={<CalendarMonthIcon />}
        onClick={() => {
          dispatch(changeViewMode("schedule"));
          navigate(PATH.home);
        }}
      />
      <BottomNavigationAction
        label="리포트"
        icon={<DataSaverOffIcon />}
        onClick={() => navigate(PATH.report)}
      />
      <BottomNavigationAction
        label=""
        icon={
          <AddCircleIcon sx={{ fontSize: "48px", color: "primary.main" }} />
        }
        onClick={() =>
          openScheduleDrawer(INIT_SCHEDULE(moment(date).format("YYYY-MM-DD")))
        }
      />
      <BottomNavigationAction
        label="자산관리"
        icon={<PaidIcon />}
        onClick={() => navigate(PATH.assetManagement)}
      />
      <BottomNavigationAction
        label="설정"
        icon={<SettingsIcon />}
        onClick={() => navigate(PATH.settings)}
      />
    </BottomNavigation>
  );
}

export default BottomBar;
/**
 * 하단 바
 */
