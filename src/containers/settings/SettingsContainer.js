import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import AppLocker from './menu/AppLocker';
import ThemeMode from './menu/ThemeMode';

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
