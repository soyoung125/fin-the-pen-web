import AssetsByCategory from '../../containers/moneyManagement/pages/AssetsByCategory';
import RegularDepositWithdrawal from '../../containers/moneyManagement/pages/RegularDepositWithdrawal';
import SavingsGoal from '../../containers/moneyManagement/pages/SavingsGoalContainer';
import ScheduleManagement from '../../containers/moneyManagement/pages/ScheduleManagement';
import PATH from '../constants/path';

const managementRoutes = [
  {
    path: PATH.savingsGoal,
    element: <SavingsGoal />,
  },
  {
    path: PATH.regularDepositWithdrawal,
    element: <RegularDepositWithdrawal />,
  },
  {
    path: PATH.assetsByCategory,
    element: <AssetsByCategory />,
  },
  {
    path: PATH.scheduleManagement,
    element: <ScheduleManagement />,
  },
];

export default managementRoutes;
