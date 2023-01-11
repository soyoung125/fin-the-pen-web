/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  Card, Divider, IconButton, ListItem, ListItemAvatar,
  ListItemButton,
  ListItemText, Menu, MenuItem, MenuList, Stack, Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';

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
      <ListItemButton onClick={() => handleModal()}>
        <ListItem>
          {/* <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar> */}
          <ListItemText
            primary={`○ ${schedule.start_time} - ${schedule.end_time}`}
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
      </ListItemButton>
      <Divider />
    </>

  );
}

export default ScheduleCard;
