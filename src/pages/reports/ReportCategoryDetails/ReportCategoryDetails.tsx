import { useEffect, useState } from "react";
import useHeader from "@hooks/useHeader.ts";
import ReportListHeader from "@pages/reports/ReportCategoryDetails/components/ReportListHeader";
import ScheduleListHeader from "@components/ScheduleList/ScheduleListHeader";
import ReportCategorySummary from "@pages/reports/ReportCategoryDetails/components/ReportCategorySummary";
import ThickDivider from "@components/common/ThickDivider.tsx";
import useCategoryReport from "@hooks/report/useCategoryReport.ts";
import ScheduleList from "@pages/Home/next-components/ScheduleList";
import ReportEmptyBox from "@pages/reports/ReportMonthDetails/components/ReportEmptyBox";
import { useScheduleDrawer } from "@hooks/useScheduleDrawer.tsx";
import moment from "moment/moment";
import { INIT_SCHEDULE } from "@constants/schedule.ts";
import useBottomBar from "@hooks/useBottomBar.ts";

function ReportCategoryDetails() {
  useHeader(false);
  useBottomBar(false);
  const options = ["최신순", "과거순"];
  const {
    report,
    isPending,
    year,
    month,
    yearMonth,
    addMonth,
    subtractMonth,
    pickMonth,
  } = useCategoryReport();
  const { openScheduleDrawer } = useScheduleDrawer();

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [scheduleDates, setScheduleDates] = useState<string[]>([]);

  const handleClickAddSchedule = () => {
    const date = moment(yearMonth, "YYYY-MM");
    openScheduleDrawer(INIT_SCHEDULE(date.format("YYYY-MM-DD")));
  };

  useEffect(() => {
    const keys = Object.keys(report?.month_schedule ?? {});
    if (selectedOption === "최신순") {
      setScheduleDates(keys);
    } else {
      setScheduleDates(keys.reverse());
    }
  }, [report, selectedOption]);

  if (isPending) {
    return <>loading</>;
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

      {scheduleDates.length === 0 ? (
        <ReportEmptyBox handleClickAddSchedule={handleClickAddSchedule} />
      ) : (
        <>
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

          {scheduleDates.map((date) => (
            <ScheduleList
              showHeader
              date={date}
              todaySchedules={report?.month_schedule[date] ?? []}
              isError={!report?.month_schedule[date]}
            />
          ))}
        </>
      )}
    </>
  );
}

export default ReportCategoryDetails;
