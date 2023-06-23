import { Box, Paper, Stack } from '@mui/material';
import { useEffect } from 'react';
import {
  selectHeaderMode, selectHeaderOpen, setGuestModeFalse, setGuestModeTrue,
} from '../../../../app/redux/slices/commonSlice';
import { selectUser } from '../../../../app/redux/slices/userSlice';
import AnalysisMode from './headerMode/AnalysisMode';
import HomeMode from './headerMode/HomeMode';
import { useAppDispatch, useAppSelector } from '../../../../app/redux/hooks';
import { selectSavingPopUpSetting } from '../../../../app/redux/slices/assetSlice';
import PopupButton from './buttons/PopupButton';

function TopBar() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const headerOpen = useAppSelector(selectHeaderOpen);
  const headerMode = useAppSelector(selectHeaderMode);
  const popupSetting = useAppSelector(selectSavingPopUpSetting);

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
            // elevation={10} // shadow 해제함
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
            {popupSetting.isOn &&
              <PopupButton />
            }
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
