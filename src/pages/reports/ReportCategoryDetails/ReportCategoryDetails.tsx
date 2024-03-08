import { useEffect, useState } from "react";
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
  const options = ["최신순", "과거순"];
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
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [scheduleDates, setScheduleDates] = useState<string[]>([]);

  useEffect(() => {
    const keys = Object.keys(report?.month_schedule ?? {});
    console.log(keys);
    if (selectedOption === "최신순") {
      setScheduleDates(keys);
    } else {
      setScheduleDates(keys.reverse());
    }
  }, [report, selectedOption]);

  if (isPending) {
    return <>loading</>;
  }

  if (!report) {
    return <>데이터가 없습니다.</>;
  }

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

      {scheduleDates.map(
        (date) =>
          report.month_schedule[date] && (
            <>
              <ConsumptionHeader date={date} />
              {report.month_schedule[date].map((schedule) => (
                <ConsumptionCard
                  schedule={schedule}
                  isRepeat={schedule.repeat_kind !== "NONE"}
                  onClick={() => alert("click")}
                />
              ))}
            </>
          )
      )}
    </>
  );
}

export default ReportCategoryDetails;
