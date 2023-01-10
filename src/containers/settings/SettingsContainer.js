import { List } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import AppLocker from './display/AppLocker';
import Budget from './display/Budget';
import ThemeMode from './display/ThemeMode';
import Schedule from './schedule/Schedule';

export default function SettingsContainer() {
  return (
    <>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        subheader={<ListSubheader>화면 설정</ListSubheader>}
      >
        <AppLocker />
        <ThemeMode />
        <Budget />
      </List>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        subheader={<ListSubheader>일정</ListSubheader>}
      >
        <Schedule />
      </List>
    </>
  );
}
