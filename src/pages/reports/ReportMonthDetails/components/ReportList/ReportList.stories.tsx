import { Meta } from "@storybook/react";
import { useState } from "react";
import ReportList from "@pages/reports/ReportMonthDetails/components/ReportList";
import { Button } from "@mui/material";
import { CategoryReport } from "@app/types/report.ts";
import { ReportListProps } from "@pages/reports/ReportMonthDetails/components/ReportList/ReportList.tsx";

const meta = {
  title: "reports/ReportMonthDetails/ReportList",
  component: ReportList,
  tags: ["autodocs"],
  args: {
    isPending: false,
    reportList: [
      { category: "음식", amount: 8000, rate: "80" },
      { category: "자동차", amount: 2000, rate: "20" },
    ],
    maxPercent: 80,
    handleClickAddSchedule: () => alert("add schedule"),
  },
  argTypes: {},
} satisfies Meta<typeof ReportList>;

export default meta;

const useStorybookFullReportList = () => {
  // 이후에 list는 tanstack query에서 비동기적으로 호출 하면 됩니다.
  const list = [
    {
      amount: 71000,
      rate: "20",
      category: "식비",
    },
    {
      amount: 71000,
      rate: "12",
      category: "미용",
    },
    {
      amount: 71000,
      rate: "8",
      category: "자동차",
    },
    {
      amount: 71000,
      rate: "7",
      category: "패션/쇼핑",
    },
    {
      amount: 71000,
      rate: "6",
      category: "카페",
    },
    {
      amount: 71000,
      rate: "5",
      category: "식비",
    },
    {
      amount: 71000,
      rate: "4",
      category: "식비",
    },
  ];
  const maxrate = Math.max(...list.map((l) => Number(l.rate)));
  return {
    list,
    maxrate,
  };
};

export const Default = (args: ReportListProps) => {
  return <ReportList {...args} />;
};

export const FullReportList = () => {
  // 이 예제는 단순히 스토리북 적용 목적입니다. 나중에 전역 상태 관리 라이브러리 + 커스텀 훅 조합해서 잘 활용하세요
  const { maxrate, list } = useStorybookFullReportList();

  return (
    <ReportList
      isPending={false}
      reportList={list}
      maxPercent={maxrate}
      handleClickAddSchedule={() => alert("add schedule")}
    />
  );
};

export const Skeleton = () => {
  // 이 예제는 단순히 스토리북 적용 목적입니다. 나중에 전역 상태 관리 라이브러리 + 커스텀 훅 조합해서 잘 활용하세요
  const [isPending, setIsPending] = useState(true);
  const { maxrate, list } = useStorybookFullReportList();

  return (
    <>
      <ReportList
        isPending={isPending}
        reportList={list}
        maxPercent={maxrate}
        handleClickAddSchedule={() => alert("add schedule")}
      />
      <Button onClick={() => setIsPending((prevState) => !prevState)}>
        로딩 상태 전환
      </Button>
    </>
  );
};

export const EmptyReportList = () => {
  // 이 예제는 단순히 스토리북 적용 목적입니다. 나중에 전역 상태 관리 라이브러리 + 커스텀 훅 조합해서 잘 활용하세요
  const maxrate = 0;
  const list: CategoryReport[] = [];

  return (
    <ReportList
      isPending={false}
      reportList={list}
      maxPercent={maxrate}
      handleClickAddSchedule={() => alert("add schedule")}
    />
  );
};
