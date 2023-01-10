import { useState } from 'react';
import HttpsIcon from '@mui/icons-material/Https';
import {
  ListItem, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import ToggleListItem from '../../../components/settings/ToggleListItem';

function AppLocker() {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
    // 여기에서 앱에서 할 행동을 지시
  };
  return (
    <>
      <ToggleListItem
        icon={<HttpsIcon />}
        title="앱 비밀번호 설정"
        checked={checked}
        setChecked={handleToggle}
      />
      {
      checked && (
        <ListItem>
          <ListItemIcon />
          <ListItemText id="비밀번호 인증 단계" primary="비밀번호 인증 단계" />
          <Typography sx={{ color: 'gray' }}>1단계</Typography>
        </ListItem>
      )
    }
    </>
  );
}
export default AppLocker;
