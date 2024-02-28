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

function ReportCategoryDetails() {
  useHeader(false);
  const navigate = useNavigate();
  const count = 10; // tanstack query 연동 예정
  const options = ["최신순", "과거순", "높은 금액순", "낮은 금액순"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const schedules: Schedule[] = [];

  return (
    // <>
    //   <TopNavigationBar
    //     onClick={() => navigate(-1)}
    //     title="카테고리 소비 상세 내역"
    //   />
    //   <ReportListHeader
    //     count={count}
    //     options={options}
    //     selectedOption={selectedOption}
    //     setSelectedOption={setSelectedOption}
    //   />
    // </>
    <>
      <ScheduleListHeader
        year={2024}
        month={5}
        addMonth={() => alert("add month")}
        subtractMonth={() => alert("subtract month")}
        changeMonth={() => alert("change month")}
        handleClickSearch={() => alert("search")}
        handleClickFilter={() => alert("filter")}
      />

      <ReportCategorySummary
        goal={1000000}
        amount={750000}
        category="식비"
        data={[10, 55, 35]}
      />

      <ThickDivider />

      <ReportListHeader
        count={10}
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <>api 미연동</>

      {/*<ConsumptionHeader date="2023-10-06" />*/}
      {/*{schedules.map((schedule) => (*/}
      {/*  <ConsumptionCard*/}
      {/*    name={schedule.event_name}*/}
      {/*    price={Number(schedule.amount)}*/}
      {/*    date="2023-10-06"*/}
      {/*    startTime={schedule.start_time}*/}
      {/*    endTime={schedule.end_time}*/}
      {/*    type={schedule.price_type}*/}
      {/*    isRepeat={false}*/}
      {/*  />*/}
      {/*))}*/}
    </>
  );
}

export default ReportCategoryDetails;
