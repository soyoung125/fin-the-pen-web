import {
  ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useNavigate } from 'react-router-dom';

function Schedule() {
  const navigate = useNavigate();
  return (
    <ListItemButton onClick={() => navigate('/')}>
      <ListItem>
        <ListItemIcon>
          <EventAvailableIcon />
        </ListItemIcon>
        <ListItemText id="비밀번호 인증 단계" primary="일정관리" />
      </ListItem>
    </ListItemButton>

  );
}
export default Schedule;
