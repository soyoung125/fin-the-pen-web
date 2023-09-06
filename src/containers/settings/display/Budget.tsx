import ToggleListItem from '../../../components/settings/ToggleListItem';
import { useAppDispatch } from '../../../app/redux/hooks';
import { useSelector } from 'react-redux';
import { changeHideBudgetMode, selectIsBudgetHidden } from '../../../app/redux/slices/settingSlice';

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
