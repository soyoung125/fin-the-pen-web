import {
  Box, CircularProgress, Drawer, Stack, Typography, IconButton,
} from '@mui/material';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import {useEffect, useRef, useState} from 'react';
import ScheduleDrawer from '../../../ScheduleDrawer';
import {CATEGORIES, Category} from '../../../../../domain/constants/categories';
import {SCHEDULE_DRAWER_MODE} from '../../../../../domain/constants/schedule';
import ScheduleCard from './ScheduleCard';
import {Schedule} from '../../../../../types/schedule';
import useSchedule from '../../../../../hooks/useSchedule';
import EasyAuthentication from '../../../../sign/EasyAuthentication';
import { useAppDispatch } from '../../../../../app/redux/hooks';
import { changeHideBudgetMode } from '../../../../../app/redux/slices/settingSlice';

function ScheduleList() {
  const dispatch = useAppDispatch();
  const lastItemRef = useRef<HTMLLIElement>(null);
  const [showButton, setShowButton] = useState(false);
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const [authenticationPageopen, steAuthenticationPageOpen] = useState(false);

  const {
    status,
    selectedSchedule,
    setSelectedSchedule,
    todaySchedules,
    date
  } = useSchedule();

  useEffect(() => {
    setShowButton(false);
    const observer = new IntersectionObserver(
      entries => {
        const isVisible = entries[0].isIntersecting;
        setShowButton(!isVisible);
      },
      { threshold: 0 }
    );

    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }
  }, [date]);

  const handleModal = (schedule: Schedule) => {
    setSelectedSchedule(schedule);
    setBottomDrawerOpen(true);
  };

  const handleScroll = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  }

  return (
    <Box sx={{ position: 'relative' }}>
      {showButton &&
        <Box sx={{ position: 'absolute', top: 10, left: 0, right: 0, zIndex: 1000, display: 'flex' }}>
          <IconButton
            sx={{ marginX: 'auto', opacity: 0.4 }}
            onClick={handleScroll}
          >
            <ExpandCircleDownRoundedIcon />
          </IconButton>
        </Box>
      }

      { // 로딩 시 Spinner
        status === 'loading' && (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box my={5}>
              <CircularProgress/>
            </Box>
          </Stack>
        )
      }
      { // 당일 스케쥴이 없는 경우
        todaySchedules.length === 0 && (
          <Stack
            justifyContent="center"
            alignItems="center"
          >
            <Box my={5}>
              <Typography>
                {date}
                에 등록된 일정이 없습니다!
              </Typography>
            </Box>
          </Stack>
        )
      }
      { // 당일 스케쥴 카드 리스트
        todaySchedules.map((schedule) => (
          <ScheduleCard
            schedule={schedule}
            category={(CATEGORIES.find((c) => c.title === schedule.category) || {color: '#C8A2C8'} as Category)}
            key={Math.random()}
            handleModal={handleModal}
            openAuthenticationPage={() => steAuthenticationPageOpen(true)}
          />
        ))
      }

      { // 예산 숨김 off를 위한 화면
        authenticationPageopen && <EasyAuthentication handleAuthenticate={() => dispatch(changeHideBudgetMode(false))} />
      }

      <Box ref={lastItemRef} />

      <Drawer
        open={bottomDrawerOpen}
        anchor="bottom"
        onClose={() => setBottomDrawerOpen(false)}
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
          handleClose={() => setBottomDrawerOpen(false)}
          data={selectedSchedule as Schedule}
          mode={SCHEDULE_DRAWER_MODE.modify}
        />
      </Drawer>
    </Box>
  );
}

export default ScheduleList;
