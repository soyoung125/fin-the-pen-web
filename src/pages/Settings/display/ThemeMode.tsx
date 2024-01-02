import { useSelector } from "react-redux";
import ToggleListItem from "@components/settings/ToggleListItem";
import {
  changeThemeMode,
  selectIsDarkMode,
} from "@redux/slices/settingSlice.ts";
import { useAppDispatch } from "@redux/hooks.ts";

function ThemeMode() {
  const dispatch = useAppDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);

  const handleToggle = () => {
    dispatch(changeThemeMode(!isDarkMode));
    // 여기에서 앱에서 할 행동을 지시
  };
  return (
    <ToggleListItem
      title="다크모드 켜기"
      checked={isDarkMode}
      setChecked={handleToggle}
    />
  );
}

export default ThemeMode;
