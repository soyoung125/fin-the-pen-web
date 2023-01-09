import { useState } from 'react';
import HttpsIcon from '@mui/icons-material/Https';
import ToggleListItem from '../../../components/settings/ToggleListItem';

function AppLocker() {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
    // 여기에서 앱에서 할 행동을 지시
  };
  return (
    <ToggleListItem
      icon={<HttpsIcon />}
      title="앱 비밀번호 설정"
      checked={checked}
      setChecked={handleToggle}
    />
  );
}
export default AppLocker;
