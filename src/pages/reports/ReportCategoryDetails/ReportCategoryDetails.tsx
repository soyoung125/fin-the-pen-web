import { useState } from "react";
import useHeader from "@hooks/useHeader.ts";
import TopNavigationBar from "@components/layouts/common/TopNavigationBar";
import { useNavigate } from "react-router-dom";
import ReportListHeader from "@pages/reports/ReportCategoryDetails/components/ReportListHeader";
import ScheduleListHeader from "@components/ScheduleList/ScheduleListHeader";
import ReportCategorySummary from "@pages/reports/ReportCategoryDetails/components/ReportCategorySummary";
import ThickDivider from "@components/common/ThickDivider.tsx";
import ConsumptionHeader from "@components/ScheduleList/ConsumptionHeader";
import ConsumptionCard from "@components/ScheduleList/ConsumptionCard";
import { Schedule } from "@app/types/schedule.ts";
import useCategoryReport from "@hooks/report/useCategoryReport.ts";

function ReportCategoryDetails() {
  useHeader(false);
  const options = ["최신순", "과거순", "높은 금액순", "낮은 금액순"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const {
    report,
    isError,
    isPending,
    year,
    month,
    addMonth,
    subtractMonth,
    pickMonth,
  } = useCategoryReport();

  return (
    <>
      <ScheduleListHeader
        date={`${year}년 ${month}월`}
        addMonth={addMonth}
        subtractMonth={subtractMonth}
        changeMonth={pickMonth}
        handleClickSearch={() => alert("search")}
        handleClickFilter={() => alert("filter")}
      />

      <ReportCategorySummary
        goal={1000000}
        amount={750000}
        category={report?.category ?? ""}
        data={[10, 55, 35]}
      />

      <ThickDivider />

      <ReportListHeader
        count={report?.count ?? 0}
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      {Object.keys(report?.month_schedule ?? {}).map((date) => (
        <>
          <ConsumptionHeader date={date} />
          {report?.month_schedule[date].map((schedule) => (
            <ConsumptionCard
              name={schedule.event_name}
              price={Number(schedule.amount)}
              date="2023-10-06"
              startTime={schedule.start_time}
              endTime={schedule.end_time}
              type={schedule.price_type}
              isRepeat={schedule.repeat_kind !== "NONE"}
              onClick={() => alert("click")}
            />
          ))}
        </>
      ))}
    </>
  );
}

export default ReportCategoryDetails;
