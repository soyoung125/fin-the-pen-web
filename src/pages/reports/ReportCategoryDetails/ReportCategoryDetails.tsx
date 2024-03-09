import useHeader from "@hooks/useHeader.ts";
import ScheduleListHeader from "components/ScheduleList/ScheduleListPageHeader";
import useCategoryReport from "@hooks/report/useCategoryReport.ts";
import { useScheduleDrawer } from "@hooks/useScheduleDrawer.tsx";
import moment from "moment/moment";
import { INIT_SCHEDULE } from "@constants/schedule.ts";
import useBottomBar from "@hooks/useBottomBar.ts";
import ReportCategoryBody from "@pages/reports/ReportCategoryDetails/components/ReportCategoryBody";

function ReportCategoryDetails() {
  useHeader(false);
  useBottomBar(false);
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

  const handleClickAddSchedule = () => {
    const date = moment(yearMonth, "YYYY-MM");
    openScheduleDrawer(INIT_SCHEDULE(date.format("YYYY-MM-DD")));
  };

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

      <ReportCategoryBody
        report={report}
        isPending={isPending}
        handleClickAddSchedule={handleClickAddSchedule}
      />
    </>
  );
}

export default ReportCategoryDetails;
