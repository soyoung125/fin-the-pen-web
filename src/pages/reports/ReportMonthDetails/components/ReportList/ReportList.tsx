import useReport from "@hooks/useReport.ts";
import ReportCard from "@pages/reports/ReportMonthDetails/components/ReportCard";
import ReportCardSkeleton from "@pages/reports/ReportMonthDetails/components/ReportCard/ReportCardSkeleton.tsx";
import {Stack} from "@mui/material";
import {Report} from "@app/types/report.ts";

interface ReportListProps {
  isPending: boolean;
  reportList?: Report[];
  maxPercent: number;
}

function ReportList({isPending, reportList, maxPercent}: ReportListProps) {

  if (isPending) {
    return <Stack gap="14px">{Array.from(new Array(5)).map(() => <ReportCardSkeleton/>)}</Stack>
  }
  if (!reportList || reportList.length === 0) {
    return <>소비 데이터가 없습니다.</>
  }

  return (
    <Stack gap="14px">
      {reportList.map((l, i) => (
        <ReportCard
          key={i}
          rank={i + 1}
          amount={l.amount}
          maxPercent={maxPercent}
          title={l.category}
          percent={Number(l.rate)}
        />
      ))}
    </Stack>
  );
}

export default ReportList;
