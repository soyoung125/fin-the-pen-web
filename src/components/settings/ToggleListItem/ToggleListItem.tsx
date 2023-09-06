import {
  ListItem, ListItemButton, ListItemText,
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
    <ListItemButton onClick={setChecked} sx={{ px: 0 }}>
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
    </ListItemButton>
  );
}
export default ToggleListItem;
