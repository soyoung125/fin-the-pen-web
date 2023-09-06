import {
  CardActionArea,
  ListItem, ListItemButton, ListItemIcon, ListItemText, Typography,
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
    // <ListItemButton onClick={() => to && navigate(to)}>
      <CardActionArea onClick={() => to && navigate(to)}>
      <ListItem>
        <ListItemText id={title} primary={title} />
        <Typography sx={{ color: 'gray' }}>{subTitle}</Typography>
      </ListItem>
      </CardActionArea>
    // </ListItemButton>
  );
}
export default ClickableListItem;
