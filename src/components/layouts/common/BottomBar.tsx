import {
  BottomNavigation,
  BottomNavigationAction,
  SwipeableDrawer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PaidIcon from "@mui/icons-material/Paid";
import moment from "moment";
import ScheduleDrawer from "../../ScheduleDrawer";
import { INIT_SCHEDULE } from "@constants/schedule.tsx";
import { changeViewMode, selectDate } from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import {
  selectBottomBarOpen,
  selectBottomDrawerTabMenu,
  setBottomDrawerTabMenu,
} from "@redux/slices/commonSlice.tsx";
import { Global } from "@emotion/react";
import { PATH } from "@constants/path.ts";
import useSchedule from "@hooks/useSchedule";

const drawerBleeding = 56;

function BottomBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { openDrawer, closeDrawer, isBottomDrawerOpen } = useSchedule();

  const date = useAppSelector(selectDate);
  const bottomTabMenu = useAppSelector(selectBottomDrawerTabMenu);
  const bottomBarOpen = useAppSelector(selectBottomBarOpen);

  const [drawerWidth, setDrawerWidth] = useState(0);

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

      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            position: "absolute",
            height: `calc(100% - ${drawerBleeding}px)`,
            maxWidth: "425px",
            left:
              drawerWidth === 425 ? `calc((100dvw - ${drawerWidth}px)/2)` : 0,
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          },
        }}
      />

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
        <ScheduleDrawer
          setDrawerWidth={setDrawerWidth}
          handleClose={closeDrawer}
        />
      </SwipeableDrawer>
    </>
  );
}

export default BottomBar;
/**
 * 하단 바
 */
