import { Box, Paper, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectHeaderMode, selectHeaderOpen, setGuestModeFalse, setGuestModeTrue,
} from '../../../../domain/redux/common/commonSlice';
import { selectUser } from '../../../../domain/redux/user/userSlice';
import AnalysisMode from './headerMode/AnalysisMode';
import HomeMode from './headerMode/HomeMode';

function TopBar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const headerOpen = useSelector(selectHeaderOpen);
  const headerMode = useSelector(selectHeaderMode);

  useEffect(() => {
    // 옵셔널 체이닝 사용하면 eslint에서 오류 발생
    if (user && user.name === 'guest') {
      console.warn('게스트 모드로 동작합니다. 게스트 모드에서는 데이터가 저장되지 않습니다.');
      dispatch(setGuestModeTrue());
    } else {
      dispatch(setGuestModeFalse());
    }
  }, [user]);

  return (
    <Box sx={{ position: 'relative', zIndex: 100 }}>
      {
        headerOpen
        && (
          <Paper
            elevation={10}
            sx={{
              backgroundColor: 'primary.main',
              height: 100,
              borderRadius: 0,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              sx={{ height: 100 }}
            >
              {headerMode === 'home' && (<HomeMode />)}
              {headerMode === 'analysis' && (<AnalysisMode />)}
            </Stack>
          </Paper>
        )
      }
    </Box>

  );
}
export default TopBar;
/**
 * 상단 바
 */
