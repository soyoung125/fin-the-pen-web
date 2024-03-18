import ToggleListItem from "pages/Settings/components/ToggleListItem";
import { useAppDispatch } from "@redux/hooks.ts";
import { useSelector } from "react-redux";
import {
  changeHideBudgetMode,
  selectIsBudgetHidden,
} from "@redux/slices/settingSlice.ts";

function Budget() {
  const dispatch = useAppDispatch();
  const isBudgetHidden = useSelector(selectIsBudgetHidden);

  const handleToggle = () => {
    dispatch(changeHideBudgetMode(!isBudgetHidden));
    // 여기에서 앱에서 할 행동을 지시
  };
  return (
    <ToggleListItem
      title="금액 숨기기"
      checked={isBudgetHidden}
      setChecked={handleToggle}
    />
  );
}

export default Budget;
