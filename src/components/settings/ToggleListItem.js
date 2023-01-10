import {
  ListItem, ListItemButton, ListItemIcon, ListItemText, Switch,
} from '@mui/material';

function ToggleListItem({
  icon, title, checked, setChecked,
}) {
  return (
    <ListItemButton onClick={setChecked}>
      <ListItem>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText id={title} primary={title} />
        <Switch
          edge="end"
          onChange={setChecked}
          checked={checked}
          inputProps={{
            'aria-labelledby': { title },
          }}
        />
      </ListItem>
    </ListItemButton>
  );
}
export default ToggleListItem;
