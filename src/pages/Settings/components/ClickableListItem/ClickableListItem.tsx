import {
  ListItem, ListItemButton, ListItemText, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ClickableListItemProps {
  to?: string;
  title: string;
  subTitle: string;
}
function ClickableListItem({
  to, title, subTitle,
}: ClickableListItemProps) {
  const navigate = useNavigate();
  return (
    <ListItemButton onClick={() => to && navigate(to)} sx={{ px: 0 }}>
      <ListItem>
        <ListItemText id={title} primary={title} />
        <Typography sx={{ color: 'gray' }}>{subTitle}</Typography>
      </ListItem>
    </ListItemButton>
  );
}
export default ClickableListItem;
