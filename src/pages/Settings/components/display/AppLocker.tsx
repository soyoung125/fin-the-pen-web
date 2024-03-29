import { useState } from "react";
import ToggleListItem from "pages/Settings/components/ToggleListItem";
import ClickableListItem from "pages/Settings/components/ClickableListItem";

function AppLocker() {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
    // 여기에서 앱에서 할 행동을 지시
  };
  return (
    <>
      <ToggleListItem
        title="어플 비밀번호 설정"
        checked={checked}
        setChecked={handleToggle}
      />
      {checked && (
        <ClickableListItem
          to="/test"
          title="비밀번호 인증 단계"
          subTitle="1단계"
        />
      )}
    </>
  );
}

export default AppLocker;
