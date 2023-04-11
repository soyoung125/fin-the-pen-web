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
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import PATH from '../../../domain/constants/path';
import ScheduleDrawer from '../ScheduleDrawer';
import { INIT_SCHEDULE, SCHEDULE_DRAWER_MODE } from '../../../domain/constants/schedule';
import { changeViewMode, selectDate } from '../../../utils/redux/schedule/scheduleSlice';
import { selectBottomDrawerOpen, setBottomDrawerOpenFalse, setBottomDrawerOpenTrue } from '../../../utils/redux/common/commonSlice';

/**
 * value와 setValue의 이름을 새로 지어주면 좋겠어요
 */
type BottomBarProps = {
  value: number;
  setValue: (value: number) => void;
};

function BottomBar({ value, setValue }: BottomBarProps) {
  const dispatch = useDispatch();
  const bottomDrawerOpen = useSelector(selectBottomDrawerOpen);
  const date = useSelector(selectDate);
  const navigate = useNavigate();

  const [drawerWidth, setDrawerWidth] = useState<number>(0);

  return (
    <>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: 1,
        }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="홈"
            icon={<CalendarMonthIcon />}
            onClick={() => {
              dispatch(changeViewMode('schedule'));
              navigate(PATH.home);
            }}
          />
          <BottomNavigationAction label="리포트" icon={<DataSaverOffIcon />} onClick={() => navigate(PATH.analysis)} />
          <BottomNavigationAction label="" icon={<AddCircleIcon />} onClick={() => dispatch(setBottomDrawerOpenTrue())} />
          <BottomNavigationAction label="자산관리" icon={<PaidIcon />} onClick={() => navigate(PATH.assetManagement)} />
          <BottomNavigationAction label="설정" icon={<SettingsIcon />} onClick={() => navigate(PATH.settings)} />
        </BottomNavigation>
      </Paper>
      <Drawer
        open={bottomDrawerOpen}
        anchor="bottom"
        onClose={() => dispatch(setBottomDrawerOpenFalse())}
        // Drawer를 가운데로 위치할 수 있도록 도와줌. resize는 이후 업데이트 예정
        PaperProps={{
          sx: {
            maxWidth: '400px',
            marginX: drawerWidth === 400 ? `calc((100% - ${drawerWidth}px)/2)` : null,
          },
        }}
      >
        {/* 이 부분을 범용적으로 사용할 수 있게 만드는 건 어떨까? */}
        <ScheduleDrawer
          setDrawerWidth={setDrawerWidth}
          handleClose={() => dispatch(setBottomDrawerOpenFalse())}
          data={{
            ...INIT_SCHEDULE(moment(date).format('YYYY-MM-DD')),
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
