/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper, Stack, ToggleButton, Typography,
} from '@mui/material';
import { useState } from 'react';
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
  const headerOpen = useSelector(selectHeaderOpen);
  const [fullScreenModalOpen, setFullScreenModalOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  return (
    <>
      <Box>
        {
          headerOpen
          && (
            <Paper
              elevation={10}
              sx={{
                backgroundColor: '#7c4dff',
                height: 100,
                borderBottomLeftRadius: '30px',
                borderBottomRightRadius: '30px',
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="stretch"
                mx={1}
                sx={{ height: 100 }}
              >
                <Stack
                  justifyContent="flex-start"
                  alignItems="center"
                  mt={1}
                >
                  <RoundedButton onClick={() => navigate(PATH.notification)}>
                    <NotificationsIcon />
                  </RoundedButton>
                </Stack>
                <Stack
                  justifyContent="flex-end"
                  alignItems="center"
                  mb={1}
                >
                  {/* <Typography sx={{ fontWeight: 'bolder' }}>
                  중앙
                </Typography>
                <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
                  표시영역
                </Typography> */}
                  {/* <Button variant="contained" onClick={() => setFullScreenModalOpen(true)}>
                  임시로 위치한 버튼 (빠른 시간 내에 복구 예정)
                </Button> */}
                </Stack>
                <Stack
                  justifyContent="flex-start"
                  alignItems="center"
                  mt={1}
                >
                  {
                    user === null
                      ? (
                        <RoundedButton onClick={() => navigate(PATH.signIn)}>
                          <LoginIcon />
                        </RoundedButton>
                      )

                      : (
                        <RoundedButton onClick={() => navigate(PATH.mypage)}>
                          <PersonIcon />
                        </RoundedButton>
                      )

                  }
                </Stack>
              </Stack>
            </Paper>
          )
        }
      </Box>
      <FullScreenDialog open={fullScreenModalOpen} setOpen={setFullScreenModalOpen} />
    </>

  );
}
export default TopBar;
/**
 * 상단 바
 */
