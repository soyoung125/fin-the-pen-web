import {
  CardActionArea, ListItem, ListItemIcon, ListItemText, Switch,
} from '@mui/material';
import SwitchButton from '../../common/SwitchButton';

interface ToggleListItemProps {
  title: string;
  checked: boolean;
  setChecked: () => void;
}
function ToggleListItem({
  title, checked, setChecked,
}: ToggleListItemProps) {
  return (
    <CardActionArea onClick={setChecked}>
      <ListItem>
        <ListItemText id={title} primary={title} />
        <SwitchButton
          handleChange={setChecked}
          checked={checked}
          // inputProps={{
          //   'aria-labelledby': title,
          // }}
        />
      </ListItem>
    </CardActionArea>
  );
}
export default ToggleListItem;
