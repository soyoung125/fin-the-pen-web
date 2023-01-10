import { List } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import AppLocker from './\bdisplay/AppLocker';
import ThemeMode from './\bdisplay/ThemeMode';

export default function SettingsContainer() {
  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      subheader={<ListSubheader>화면 설정</ListSubheader>}
    >
      <AppLocker />
      <ThemeMode />
    </List>
  );
}
