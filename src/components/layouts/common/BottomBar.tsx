import {
  BottomNavigation,
  BottomNavigationAction,
  SwipeableDrawer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import PaidIcon from "@mui/icons-material/Paid";
import moment from "moment";
import ScheduleDrawer from "../../ScheduleDrawer";
import { INIT_SCHEDULE } from "@constants/schedule.ts";
import { changeViewMode, selectDate } from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import {
  selectBottomBarOpen,
  selectBottomDrawerTabMenu,
  setBottomDrawerTabMenu,
} from "@redux/slices/commonSlice.tsx";
import { PATH } from "@constants/path.ts";
import useSchedule from "@hooks/useSchedule.ts";

function BottomBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { openDrawer, closeDrawer, isBottomDrawerOpen } = useSchedule();

  const date = useAppSelector(selectDate);
  const bottomTabMenu = useAppSelector(selectBottomDrawerTabMenu);
  const bottomBarOpen = useAppSelector(selectBottomBarOpen);

  const toggleDrawer = (newOpen: boolean) => () => {
    !newOpen && closeDrawer();
  };

  return (
    <>
      <BottomNavigation
        value={bottomTabMenu}
        onChange={(event: React.SyntheticEvent, newValue: any) => {
          dispatch(setBottomDrawerTabMenu(newValue));
        }}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          py: 2,
          zIndex: 10,
          display: bottomBarOpen ? "flex" : "none",
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
          icon={<AddCircleIcon />}
          onClick={() =>
            openDrawer(INIT_SCHEDULE(moment(date).format("YYYY-MM-DD")))
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

      <SwipeableDrawer
        anchor="bottom"
        open={isBottomDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <ScheduleDrawer handleClose={closeDrawer} />
      </SwipeableDrawer>
    </>
  );
}

export default BottomBar;
/**
 * 하단 바
 */
