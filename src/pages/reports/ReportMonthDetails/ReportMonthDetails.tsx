import TopNavigationBar from "@components/layouts/common/TopNavigationBar";
import {Stack} from "@mui/material";
import ReportMonthTitle from "@pages/reports/ReportMonthDetails/components/ReportMonthTitle";
import ReportCard from "@pages/reports/ReportMonthDetails/components/ReportCard";
import useReport from "@hooks/useReport.ts";
import useHeader from "@hooks/useHeader.ts";
import {useNavigate} from "react-router-dom";

function ReportMonthDetails() {
  useHeader(false);
  const navigate = useNavigate();
  const {year, month, addMonth, subtractMonth, pickMonth, reportList, isPending, isError, maxPercent} = useReport();

  if (isPending) {
    return <>loading</>;
  }
  if (!reportList || isError) {
    return <>소비 데이터가 없습니다.</>
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
        onClickLeftIcon={subtractMonth}
        onClickMonth={pickMonth}
        onClickRightIcon={addMonth}
      />
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
    </Stack>
  </>;
}

export default ReportMonthDetails;
