/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  Card, Divider, IconButton, ListItem, ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText, Menu, MenuItem, MenuList, Stack, Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

function ScheduleCard({ schedule, setScheduleModalOpen, setSelectedSchedule }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleModal = () => {
    setSelectedSchedule(schedule);
    setScheduleModalOpen(true);
    setAnchorEl(null);
  };

  return (
    <>
      {/* <Box px={1} mb={1}>
      <Card>
        <Stack direction="row" justifyContent="space-between" p={1}>
          <Stack>
            <Typography>{`○ ${schedule.start_time} - ${schedule.end_time}`}</Typography>
            <Typography>{`${schedule.event_name}`}</Typography>
          </Stack>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            size="small"
          >
            <MoreVertIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuList dense>
              <MenuItem onClick={handleModal}>자세히 보기</MenuItem>
              <MenuItem onClick={handleClose}>삭제</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Card>
    </Box> */}
      {/* <ListItemButton onClick={() => handleModal()}>
        <ListItem>
          <Box height="100%">
            <Box
              sx={{
                width: '15px', height: '15px', border: '4px solid', borderRadius: 3,
                borderColor: schedule.category.color, marginY: 'auto', marginRight: 0.5,
              }}
            />
          </Box>
          <ListItemText
            primary={`${schedule.start_time} - ${schedule.end_time}`}
            secondary={schedule.event_name}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuList dense>
              <MenuItem onClick={handleModal}>자세히 보기</MenuItem>
              <MenuItem onClick={handleClose}>삭제</MenuItem>
            </MenuList>
          </Menu>
        </ListItem>
      </ListItemButton> */}
      <Box fullwidth px={3} py={2} onClick={() => handleModal()}>
        <Stack direction="row">
          <Box
            sx={{
              width: '15px', height: '15px', border: '4px solid', borderRadius: 3, borderColor: schedule.category.color, marginY: 'auto', marginRight: 2,
            }}
          />
          <Typography variant="caption" fullwidth>{`${schedule.start_time} - ${schedule.end_time}`}</Typography>
        </Stack>
        <Typography variant="h6" pl={1} pt={1}>{schedule.event_name}</Typography>
      </Box>
      <Divider />
    </>

  );
}

export default ScheduleCard;
