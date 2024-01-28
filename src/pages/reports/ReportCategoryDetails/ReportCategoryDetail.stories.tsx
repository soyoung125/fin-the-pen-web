import ReportCategoryDetails from "@pages/reports/ReportCategoryDetails/ReportCategoryDetails.tsx";
import { Meta } from "@storybook/react";
import ReportListHeader from "@pages/reports/ReportCategoryDetails/components/ReportListHeader";
import ReportCategorySummary from "@pages/reports/ReportCategoryDetails/components/ReportCategorySummary";
import ThickDivider from "@components/common/ThickDivider.tsx";
import { useState } from "react";
import ConsumptionCard from "components/ScheduleList/ConsumptionCard";
import ScheduleListHeader from "@components/ScheduleList/ScheduleListHeader";
import ConsumptionHeader from "@components/ScheduleList/ConsumptionHeader/ConsumptionHeader.tsx";

const meta = {
  title: "reports/ReportCategoryDetails",
  component: ReportCategoryDetails,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ReportCategoryDetails>;

export default meta;

export const ExamplePage = () => {
  const options = ["최신순", "과거순", "높은 금액순", "낮은 금액순"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const schedules = [
    {
      event_name: "마라탕",
      type: "-",
      start_time: "10:00",
      end_time: "13:00",
      price: 15000,
      repeat: true,
    },
    {
      event_name: "떡볶이",
      type: "-",
      start_time: "10:00",
      end_time: "13:00",
      price: 60000,
      repeat: false,
    },
    {
      event_name: "양꼬치",
      type: "-",
      start_time: "10:00",
      end_time: "13:00",
      price: 15000,
      repeat: false,
    },
  ];

  return (
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

      <ConsumptionHeader date="2023-10-06" />
      {schedules.map((schedule) => (
        <ConsumptionCard
          name={schedule.event_name}
          price={schedule.price}
          date="2023-10-06"
          startTime={schedule.start_time}
          endTime={schedule.end_time}
          type={schedule.type}
          isRepeat={schedule.repeat}
        />
      ))}
    </>
  );
};
