import ReportCard from "@pages/reports/ReportMonthDetails/components/ReportCard";
import ReportCardSkeleton from "@pages/reports/ReportMonthDetails/components/ReportCard/ReportCardSkeleton.tsx";
import {Button, Stack} from "@mui/material";
import {Report} from "@app/types/report.ts";
import {useState} from "react";

interface ReportListProps {
  isPending: boolean;
  reportList?: Report[];
  maxPercent: number;
}

function ReportList({isPending, reportList, maxPercent}: ReportListProps) {
  const [visibleItems, setVisibleItems] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  if (isPending) {
    return <Stack gap="14px">{Array.from(new Array(5)).map(() => <ReportCardSkeleton/>)}</Stack>
  }
  if (!reportList || reportList.length === 0) {
    return <>소비 데이터가 없습니다.</>
  }

  if (reportList.length < 6) {
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

  const handleToggleVisibility = () => {
    if (isExpanded) {
      setVisibleItems(5);
    } else {
      setVisibleItems(reportList.length);
    }
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <Stack gap="14px">
      {reportList.slice(0, visibleItems).map((l, i) => (
        <ReportCard
          key={i}
          rank={i + 1}
          amount={l.amount}
          maxPercent={maxPercent}
          title={l.category}
          percent={Number(l.rate)}
        />
      ))}

      <Button variant="outlined" color="secondary" onClick={handleToggleVisibility}>
        {isExpanded ? '접기' : '더보기'}
      </Button>
    </Stack>
  );
}

export default ReportList;
