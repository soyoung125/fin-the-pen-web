import ScheduleListPageHeader from "components/ScheduleList/ScheduleListPageHeader";
import useHome from "@hooks/useHome.ts";
import moment from "moment";
import { Stack } from "@mui/material";
import SummaryCard from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary/SummaryCard";
import useHeader from "@hooks/useHeader.ts";
import ScheduleListHeader from "components/ScheduleList/ScheduleListHeader";
import { useState } from "react";

function ScheduleListPage() {
  useHeader(false);
  const options = ["최신순", "과거순"];

  const { date, subtractMonth, addMonth, pickMonth } = useHome();

  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      <ScheduleListPageHeader
        date={moment(date).format("YYYY년 M월")}
        addMonth={addMonth}
        subtractMonth={subtractMonth}
        handleClickFilter={() => alert("filter")}
        handleClickSearch={() => alert("search")}
        changeMonth={pickMonth}
      />

      <Stack
        py={3}
        px={2.5}
        spacing="6px"
        bgcolor="primary.main"
        sx={{ color: "#FFF" }}
      >
        <SummaryCard title="수입" amount={350000} />
        <SummaryCard title="지출" amount={-35000} />
      </Stack>

      <ScheduleListHeader
        count={0}
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </>
  );
}

export default ScheduleListPage;
