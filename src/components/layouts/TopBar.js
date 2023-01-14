/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper, Stack, ToggleButton, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { selectHeaderMode, selectHeaderOpen } from '../../utils/redux/common/commonSlice';
import FullScreenDialog from './FullScreenDialog';
import RoundedButton from '../common/RoundedButton';
import PATH from '../../utils/constants/path';
import { selectUser } from '../../utils/redux/user/userSlice';

function PersonalButton({ user }) {
  const navigate = useNavigate();
  if (user === null) {
    return (
      <RoundedButton value="login" onClick={() => navigate(PATH.signIn)}>
        <LoginIcon />
      </RoundedButton>

    );
  }
  return (
    <RoundedButton value="user" onClick={() => navigate(PATH.mypage)}>
      <PersonIcon />
    </RoundedButton>
  );
}
function TopBar() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const headerOpen = useSelector(selectHeaderOpen);
  const headerMode = useSelector(selectHeaderMode);
  const [fullScreenModalOpen, setFullScreenModalOpen] = useState(false);
  const [ask, setAsk] = useState({
    id: 0,
    question: '',
    label: '',
    answer: null,
    skip: false,
  });

  useEffect(() => {
    if (user !== null) {
      for (let index = 0; index < user.goals.length; index += 1) {
        const goal = user.goals[index];
        if (goal.skip === false && goal.answer === null) {
          setAsk(goal);
          setFullScreenModalOpen(true);
          break;
        }
      }
    }
  }, [user]);

  return (
    <>
      <Box sx={{ position: 'relative', zIndex: 100 }}>
        {
          headerOpen
          && (
            <Paper
              elevation={10}
              sx={{
                backgroundColor: 'primary.main',
                height: 100,
                borderTopLeftRadius: '0px',
                borderTopRightRadius: '0px',
                borderBottomLeftRadius: '15px',
                borderBottomRightRadius: '15px',
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
                sx={{ height: 100 }}
              >
                {/* 헤더 좌측 메뉴 */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-end"
                >
                  {headerMode === 'analysis' && (
                    <RoundedButton value="user" onClick={() => alert('준비 중인 메뉴')}>
                      <FilterAltIcon />
                    </RoundedButton>
                  )}
                </Stack>
                {/* 헤더 우측 메뉴 */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-end"
                >
                  {headerMode === 'home' && (
                    <>
                      <RoundedButton value="user" onClick={() => alert('준비 중인 메뉴')}>
                        <SearchIcon />
                      </RoundedButton>
                      <RoundedButton value="notification" onClick={() => navigate(PATH.notification)}>
                        <NotificationsIcon />
                      </RoundedButton>
                      <PersonalButton user={user} />
                    </>
                  )}
                  {headerMode === 'analysis' && (
                    <PersonalButton user={user} />
                  )}
                </Stack>

              </Stack>
            </Paper>
          )
        }
      </Box>
      <FullScreenDialog open={fullScreenModalOpen} setOpen={setFullScreenModalOpen} ask={ask} />
    </>

  );
}
export default TopBar;
/**
 * 상단 바
 */
