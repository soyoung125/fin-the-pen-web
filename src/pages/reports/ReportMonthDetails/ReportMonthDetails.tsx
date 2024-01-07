import TopNavigationBar from "@components/layouts/common/TopNavigationBar";
import {Stack} from "@mui/material";
import ReportMonthTitle from "@pages/reports/ReportMonthDetails/components/ReportMonthTitle";
import useReport from "@hooks/useReport.ts";
import useHeader from "@hooks/useHeader.ts";
import {useNavigate} from "react-router-dom";
import ReportList from "@pages/reports/ReportMonthDetails/components/ReportList";

function ReportMonthDetails() {
  useHeader(false);
  const navigate = useNavigate();
  const {year, month, pickMonth, isPending, reportList, maxPercent} = useReport();

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

      <ReportList isPending={isPending} reportList={reportList} maxPercent={maxPercent}/>
    </Stack>
  </>;
}

export default ReportMonthDetails;
