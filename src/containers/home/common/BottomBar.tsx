import {
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState, useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PaidIcon from "@mui/icons-material/Paid";
import moment from "moment";
import PATH from "../../../constants/path";
import ScheduleDrawer from "../ScheduleDrawer";
import {
  INIT_SCHEDULE,
  SCHEDULE_DRAWER_MODE,
} from "../../../constants/schedule.tsx";
import { changeViewMode, selectDate } from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import { useRecoilValue } from "recoil";
import {
  bottomDrawerOpenRepository,
  bottomDrawerOpenState,
} from "@recoil/bottomDrawer.ts";
import {
  bottomBarOpenState,
  bottomTabMenuRepository,
  bottomTabMenuState,
} from "@recoil/bottomTabMenu.ts";

function BottomBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const date = useAppSelector(selectDate);
  const bottomTabMenu = useRecoilValue(bottomTabMenuState);
  const bottomBarOpen = useRecoilValue(bottomBarOpenState)
  const { openBottomTabMenu } = useRecoilValue(bottomTabMenuRepository);

  const isBottomDrawerOpen = useRecoilValue(bottomDrawerOpenState);
  const { openBottomDrawer, closeBottomDrawer } = useRecoilValue(
    bottomDrawerOpenRepository
  );

  const [drawerWidth, setDrawerWidth] = useState(0);
  const [startTime, setStartTime] = useState("09");

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
        onChange={(event, newValue) => {
          openBottomTabMenu(newValue);
        }}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: 2,
          zIndex: 10,
          display: bottomBarOpen? 'flex' : 'none',
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
          onClick={openBottomDrawer}
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

      <Drawer
        open={isBottomDrawerOpen}
        anchor="bottom"
        onClose={closeBottomDrawer}
        // Drawer를 가운데로 위치할 수 있도록 도와줌. resize는 이후 업데이트 예정
        PaperProps={{
          sx: {
            maxWidth: "400px",
            marginX:
              drawerWidth === 400 ? `calc((100% - ${drawerWidth}px)/2)` : null,
          },
        }}
      >
        {/* 이 부분을 범용적으로 사용할 수 있게 만드는 건 어떨까? */}
        <ScheduleDrawer
          setDrawerWidth={setDrawerWidth}
          handleClose={closeBottomDrawer}
          data={{
            ...INIT_SCHEDULE(moment(date).format("YYYY-MM-DD"), startTime),
          }}
          mode={SCHEDULE_DRAWER_MODE.create}
        />
      </Drawer>
    </>
  );
}
export default BottomBar;
/**
 * 하단 바
 */
