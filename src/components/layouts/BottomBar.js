import {
  BottomNavigation, BottomNavigationAction, Drawer, Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import PaidIcon from '@mui/icons-material/Paid';
import PATH from '../../utils/constants/path';
import AddScheduleDrawer from '../calender/addScheduleDrawer/AddScheduleDrawer';

function BottomBar({ value, setValue }) {
  const navigate = useNavigate();
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
  return (
    <>
      <Paper
        sx={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="홈" icon={<CalendarMonthIcon />} onClick={() => navigate(PATH.home)} />
          <BottomNavigationAction label="리포트" icon={<DataSaverOffIcon />} onClick={() => navigate(PATH.analysis)} />
          <BottomNavigationAction label="" icon={<AddCircleIcon />} onClick={() => setBottomDrawerOpen(true)} />
          <BottomNavigationAction label="자산관리" icon={<PaidIcon />} onClick={() => navigate(PATH.notification)} />
          <BottomNavigationAction label="설정" icon={<SettingsIcon />} onClick={() => navigate(PATH.mypage)} />
          {/* <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} /> */}
        </BottomNavigation>
      </Paper>
      <Drawer
        open={bottomDrawerOpen}
        anchor="bottom"
        onClose={() => setBottomDrawerOpen(false)}
      >
        {/* 이 부분을 범용적으로 사용할 수 있게 만드는 건 어떨까? */}
        <AddScheduleDrawer setBottomDrawerOpen={setBottomDrawerOpen} />
      </Drawer>
    </>
  );
}
export default BottomBar;
/**
 * 하단 바
 */
