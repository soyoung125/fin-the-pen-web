import ScheduleListHeader from "@components/ScheduleList/ScheduleListHeader";
import useHome from "@hooks/useHome.ts";
import moment from "moment";
import { Stack } from "@mui/material";
import SummaryCard from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary/SummaryCard";
import useHeader from "@hooks/useHeader.ts";

function ScheduleListPage() {
  useHeader(false);

  const { date, subtractMonth, addMonth, pickMonth } = useHome();
  return (
    <>
      <ScheduleListHeader
        date={moment(date).format("YYYY년 M월")}
        addMonth={addMonth}
        subtractMonth={subtractMonth}
        handleClickFilter={() => alert("filter")}
        handleClickSearch={() => alert("search")}
        changeMonth={pickMonth}
      />

      <Stack py={3} px={2.5} spacing="6px" bgcolor="primary.main">
        <SummaryCard title="" amount={350000} />
        <SummaryCard title="" amount={35000} />
      </Stack>
    </>
  );
}

export default ScheduleListPage;
