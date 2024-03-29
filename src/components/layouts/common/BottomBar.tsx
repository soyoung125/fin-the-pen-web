import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { INIT_SCHEDULE } from "@constants/schedule.ts";
import { selectDate } from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import {
  selectBottomBarOpen,
  selectBottomDrawerTabMenu,
  setBottomDrawerTabMenu,
} from "@redux/slices/commonSlice.tsx";
import { PATH } from "@constants/path.ts";
import { useScheduleDrawer } from "@hooks/useScheduleDrawer.tsx";
import add_button from "@assets/icons/bottom/add_button.svg";
import CalendarIcon from "@components/layouts/common/BottomBar/buttons/Calendar.tsx";
import ReportIcon from "@components/layouts/common/BottomBar/buttons/Report.tsx";
import AssetIcon from "@components/layouts/common/BottomBar/buttons/asset.tsx";
import SettingIcon from "@components/layouts/common/BottomBar/buttons/setting.tsx";

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
      onChange={(event: React.SyntheticEvent, newValue: number) => {
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
        icon={<CalendarIcon selected={bottomTabMenu === 0} />}
        onClick={() => {
          navigate(PATH.home);
        }}
      />
      <BottomNavigationAction
        label="리포트"
        icon={<ReportIcon selected={bottomTabMenu === 1} />}
        onClick={() => navigate(PATH.report)}
      />
      <BottomNavigationAction
        label=""
        icon={<img src={add_button} alt="add schedule" />}
        onClick={() =>
          openScheduleDrawer(INIT_SCHEDULE(moment(date).format("YYYY-MM-DD")))
        }
      />
      <BottomNavigationAction
        label="자산관리"
        icon={<AssetIcon selected={bottomTabMenu === 3} />}
        onClick={() => navigate(PATH.assetManagement)}
      />
      <BottomNavigationAction
        label="설정"
        icon={<SettingIcon selected={bottomTabMenu === 4} />}
        onClick={() => navigate(PATH.settings)}
      />
    </BottomNavigation>
  );
}

export default BottomBar;
/**
 * 하단 바
 */
