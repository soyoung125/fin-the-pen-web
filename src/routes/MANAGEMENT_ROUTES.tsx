import AssetsByCategory from '../containers/assetManagement/pages/AssetsByCategory';
import RegularDepositWithdrawal from '../containers/assetManagement/pages/RegularDepositWithDrawalContainer';
import DetailInformation from '../containers/assetManagement/pages/RegularDepositWithDrawalContainer/detailPage/DetailInformation';
import DetailSetting from '../containers/assetManagement/pages/RegularDepositWithDrawalContainer/detailPage/DetailSetting';
import SavingsGoal from '../containers/assetManagement/pages/SavingsGoalContainer';
import ScheduleManagement from '../containers/assetManagement/pages/ScheduleManagement';
import PATH from '../domain/constants/path';
import { RouterDOM } from '../types/common';

const MANAGEMENT_ROUTES: RouterDOM[] = [
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
    path: PATH.DetailInformation,
    element: <DetailInformation />,
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

export default MANAGEMENT_ROUTES;
