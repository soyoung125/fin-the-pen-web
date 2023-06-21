import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useSelector } from 'react-redux';
import ToggleListItem from '../../../components/settings/ToggleListItem';
import { changeThemeMode, selectIsDarkMode } from '../../../app/redux/slices/settingSlice';
import { useAppDispatch } from '../../../app/redux/hooks';

function ThemeMode() {
  const dispatch = useAppDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);

  const handleToggle = () => {
    dispatch(changeThemeMode(!isDarkMode));
    // 여기에서 앱에서 할 행동을 지시
  };
  return (
    <ToggleListItem
      icon={<DarkModeIcon />}
      title="다크모드 켜기"
      checked={isDarkMode}
      setChecked={handleToggle}
    />
  );
}
export default ThemeMode;
