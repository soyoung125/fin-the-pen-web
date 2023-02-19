import AssetsByCategory from '../../containers/assetManagement/pages/AssetsByCategory';
import RegularDepositWithdrawal from '../../containers/assetManagement/pages/RegularDepositWithDrawelContainer';
import DetailSetting from '../../containers/assetManagement/pages/RegularDepositWithDrawelContainer/detailPage/DetailSetting';
import SavingsGoal from '../../containers/assetManagement/pages/SavingsGoalContainer';
import ScheduleManagement from '../../containers/assetManagement/pages/ScheduleManagement';
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
    path: PATH.DetailSetting,
    element: <DetailSetting />,
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
