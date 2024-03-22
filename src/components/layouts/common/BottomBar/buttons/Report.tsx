import report_primary from "@assets/icons/bottom/report_primary.svg";
import report_secondary from "@assets/icons/bottom/report_secondary.svg";
import { ButtonIcon } from "@components/layouts/common/BottomBar/buttons/types.ts";

function ReportIcon({ selected }: ButtonIcon) {
  if (selected) return <img src={report_primary} alt="report_primary" />;

  return <img src={report_secondary} alt="report_secondary" />;
}

export default ReportIcon;
