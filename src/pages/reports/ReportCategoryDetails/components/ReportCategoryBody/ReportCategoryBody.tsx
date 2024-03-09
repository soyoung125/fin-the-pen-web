import { CategoryDetail } from "@app/types/report.ts";
import { useEffect, useState } from "react";
import ReportEmptyBox from "@pages/reports/ReportMonthDetails/components/ReportEmptyBox";
import moment from "moment";
import { INIT_SCHEDULE } from "@constants/schedule.ts";
import ReportCategorySummary from "@pages/reports/ReportCategoryDetails/components/ReportCategorySummary";
import ThickDivider from "@components/common/ThickDivider.tsx";
import ReportListHeader from "@pages/reports/ReportCategoryDetails/components/ReportListHeader";
import ScheduleList from "@pages/Home/next-components/ScheduleList";
import ReportCategorySummarySkeleton from "@pages/reports/ReportCategoryDetails/components/ReportCategorySummary/ReportCategorySummarySkeleton.tsx";
import ScheduleListSkeleton from "@pages/Home/next-components/ScheduleList/ScheduleListSkeleton.tsx";

export interface ReportCategoryBodyProps {
  report?: CategoryDetail;
  isPending: boolean;
  handleClickAddSchedule: () => void;
}

function ReportCategoryBody({
  report,
  isPending,
  handleClickAddSchedule,
}: ReportCategoryBodyProps) {
  const options = ["최신순", "과거순"];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [scheduleDates, setScheduleDates] = useState<string[]>([]);

  useEffect(() => {
    const keys = Object.keys(report?.month_schedule ?? {});
    if (selectedOption === "최신순") {
      setScheduleDates(keys);
    } else {
      setScheduleDates(keys.reverse());
    }
  }, [report, selectedOption]);

  if (isPending) {
    return (
      <>
        <ReportCategorySummarySkeleton />
        <ThickDivider />
        <ReportListHeader
          count={0}
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <ScheduleListSkeleton />
      </>
    );
  }

  if (scheduleDates.length === 0) {
    return <ReportEmptyBox handleClickAddSchedule={handleClickAddSchedule} />;
  }

  return (
    <>
      <ReportCategorySummary
        goal={Number(report?.category_expect)}
        amount={Number(report?.category_expense)}
        category={report?.category ?? ""}
        data={[20, 10, 70]}
      />
      <ThickDivider />
      <ReportListHeader
        count={report?.count ?? 0}
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      {scheduleDates.map((date) => (
        <ScheduleList
          showHeader
          date={date}
          todaySchedules={report?.month_schedule[date] ?? []}
          isError={!report?.month_schedule[date]}
        />
      ))}
    </>
  );
}

export default ReportCategoryBody;
