import AssetsByCategory from "../../containers/assetManagement/AssetsByCategory";
import RegularDepositWithdrawal from "../../containers/assetManagement/RegularDepositWithDrawalContainer";
import DetailInformation from "../../containers/assetManagement/RegularDepositWithDrawalContainer/detailPage/DetailInformation";
import DetailSetting from "../../containers/assetManagement/RegularDepositWithDrawalContainer/detailPage/DetailSetting";
import SavingsGoal from "../../containers/assetManagement/SavingsGoalContainer";
import ScheduleManagement from "../../containers/assetManagement/ScheduleManagement";
import PATH from "../../constants/path";
import { RouterDOM } from "../../types/common";

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
