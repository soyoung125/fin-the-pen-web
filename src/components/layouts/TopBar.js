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
import { selectHeaderOpen } from '../../utils/redux/common/commonSlice';
import FullScreenDialog from './FullScreenDialog';
import RoundedButton from '../common/RoundedButton';
import PATH from '../../utils/constants/path';
import { selectUser } from '../../utils/redux/user/userSlice';

function TopBar() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const headerOpen = useSelector(selectHeaderOpen);
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
                <RoundedButton value="notification" onClick={() => navigate(PATH.notification)}>
                  <NotificationsIcon />
                </RoundedButton>

                {
                  user === null
                    ? (
                      <RoundedButton value="login" onClick={() => navigate(PATH.signIn)}>
                        <LoginIcon />
                      </RoundedButton>
                    ) : (
                      <RoundedButton value="user" onClick={() => navigate(PATH.mypage)}>
                        <PersonIcon />
                      </RoundedButton>
                    )
                }
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
