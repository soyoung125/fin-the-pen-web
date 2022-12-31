import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import PATH from '../../utils/constants/Path';
import { NOTHING_IS_HERE_YET } from '../../utils/constants/Common';

function BottomBar({ value, setValue }) {
  const navigate = useNavigate();
  console.log(value);
  return (
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
        <BottomNavigationAction label="분석" icon={<DataSaverOffIcon />} onClick={() => navigate(PATH.analysis)} />
        <BottomNavigationAction label="" icon={<AddCircleIcon />} onClick={() => alert(NOTHING_IS_HERE_YET)} />
        <BottomNavigationAction label="알림" icon={<NotificationsIcon />} onClick={() => alert(NOTHING_IS_HERE_YET)} />
        <BottomNavigationAction label="개인" icon={<PersonIcon />} onClick={() => navigate(PATH.signIn)} />
        {/* <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} /> */}
      </BottomNavigation>
    </Paper>
  );
}
export default BottomBar;
/**
 * 하단 바
 */
