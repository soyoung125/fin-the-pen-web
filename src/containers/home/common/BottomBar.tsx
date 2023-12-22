import {
  BottomNavigation,
  BottomNavigationAction,
  SwipeableDrawer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PaidIcon from "@mui/icons-material/Paid";
import moment from "moment";
import ScheduleDrawer from "../ScheduleDrawer";
import {
  INIT_SCHEDULE,
  SCHEDULE_DRAWER_MODE,
} from "../../../constants/schedule.tsx";
import { changeViewMode, selectDate } from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import {
  selectBottomBarOpen,
  selectBottomDrawerTabMenu,
  setBottomDrawerTabMenu,
} from "@redux/slices/commonSlice.tsx";
import { Global } from "@emotion/react";
import { PATH } from "../../../constants/path.ts";

const drawerBleeding = 56;

function BottomBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const date = useAppSelector(selectDate);
  const bottomTabMenu = useAppSelector(selectBottomDrawerTabMenu);
  const bottomBarOpen = useAppSelector(selectBottomBarOpen);
  const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);

  const [drawerWidth, setDrawerWidth] = useState(0);
  const [startTime, setStartTime] = useState("09");

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsBottomDrawerOpen(newOpen);
  };

  useEffect(() => {
    if (moment().isSame(date, "day")) {
      setStartTime(moment().add(1, "hours").format("HH"));
    } else {
      setStartTime(moment("09:00", "HH:mm").format("HH"));
    }
  }, [date]);

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
          paddingBottom: 2,
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
          onClick={() => navigate(PATH.analysis)}
        />
        <BottomNavigationAction
          label=""
          icon={<AddCircleIcon />}
          onClick={() => setIsBottomDrawerOpen(true)}
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
          handleClose={() => setIsBottomDrawerOpen(false)}
          data={{
            ...INIT_SCHEDULE(moment(date).format("YYYY-MM-DD"), startTime),
          }}
          mode={SCHEDULE_DRAWER_MODE.create}
        />
      </SwipeableDrawer>
    </>
  );
}

export default BottomBar;
/**
 * 하단 바
 */
