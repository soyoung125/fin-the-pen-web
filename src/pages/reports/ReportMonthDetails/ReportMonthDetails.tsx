import TopNavigationBar from "@components/layouts/common/TopNavigationBar";
import {Stack} from "@mui/material";
import ReportMonthTitle from "@pages/reports/ReportMonthDetails/components/ReportMonthTitle";
import useReport from "@hooks/useReport.ts";
import useHeader from "@hooks/useHeader.ts";
import {useNavigate} from "react-router-dom";
import ReportList from "@pages/reports/ReportMonthDetails/components/ReportList";
import {useScheduleDrawer} from "@hooks/useScheduleDrawer.tsx";
import {INIT_SCHEDULE} from "@constants/schedule.ts";
import moment from "moment";

function ReportMonthDetails() {
  useHeader(false);
  const navigate = useNavigate();
  const {yearMonth, year, month, pickMonth, isPending, reportList, maxPercent} = useReport();
  const {openScheduleDrawer} = useScheduleDrawer();

  const handleClickAddSchedule = () => {
    const date = moment(yearMonth, "YYYY-MM");
    openScheduleDrawer(INIT_SCHEDULE(date.format("YYYY-MM-DD")))
  }

  return <>
    <TopNavigationBar
      onClick={() => navigate(-1)}
      title="카테고리 상세 내역"
    />
    <Stack px="20px" py="24px" gap="24px">
      <ReportMonthTitle
        year={year}
        month={month}
        onClickMonth={pickMonth}
      />

      <ReportList isPending={isPending} reportList={reportList} maxPercent={maxPercent}
                  handleClickAddSchedule={handleClickAddSchedule}/>
    </Stack>
  </>;
}

export default ReportMonthDetails;
