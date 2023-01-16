import { CATEGORIES } from '../../utils/constants/categories';

function MoneyManagementContainer() {
  return (
    <>
      자산 관리
      {
        CATEGORIES.map((cat) => <div>{JSON.stringify(cat)}</div>)
      }
    </>
  );
}
export default MoneyManagementContainer;
