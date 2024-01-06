import {Meta} from "@storybook/react";
import {Stack} from "@mui/material";
import ReportMonthTitle from "@pages/reports/ReportMonthDetails/components/ReportMonthTitle";
import {useState} from "react";
import ReportCard from "@pages/reports/ReportMonthDetails/components/ReportCard";
import TopNavigationBar from "@components/layouts/common/TopNavigationBar";
import {useDatePicker} from "@hooks/date-picker/hooks/useDatePicker.tsx";

const meta = {
  title: "reports/ReportMonthDetails",
  component: undefined,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta;

export default meta;

const useStorybookMonth = () => {
  const [yearMonth, setYearMonth] = useState("2023-5");
  const [year, month] = yearMonth.split("-").map((s) => Number(s));
  const {openMonthPicker} = useDatePicker();

  const pickMonth = async () => {
    const newMonth = await openMonthPicker(yearMonth);
    setYearMonth(newMonth.format("YYYY-MM"));
  };

  return {
    month,
    year,
    pickMonth,
  };
};

const useStorybookReportList = () => {
  // 이후에 list는 tanstack query에서 비동기적으로 호출 하면 됩니다.
  const list = [
    {
      amount: 71000,
      percent: 20,
      title: "식비",
    },
    {
      amount: 71000,
      percent: 12,
      title: "미용",
    },
    {
      amount: 71000,
      percent: 8,
      title: "자동차",
    },
    {
      amount: 71000,
      percent: 7,
      title: "패션/쇼핑",
    },
    {
      amount: 71000,
      percent: 6,
      title: "카페",
    },
    {
      amount: 71000,
      percent: 5,
      title: "식비",
    },
    {
      amount: 71000,
      percent: 4,
      title: "식비",
    },
  ];
  const maxPercent = Math.max(...list.map((l) => l.percent));
  return {
    list,
    maxPercent,
  };
};

export const PageExample = () => {
  // 이 예제는 단순히 스토리북 적용 목적입니다. 나중에 전역 상태 관리 라이브러리 + 커스텀 훅 조합해서 잘 활용하세요
  const {year, pickMonth, month} =
    useStorybookMonth();
  const {maxPercent, list} = useStorybookReportList();

  return (
    <>
      <TopNavigationBar
        onClick={() => alert("hey")}
        title="카테고리 상세 내역"
      />
      <Stack px="20px" py="24px" gap="24px">
        <ReportMonthTitle
          year={year}
          month={month}
          onClickMonth={pickMonth}
        />
        <Stack gap="14px">
          {list.map((l, i) => (
            <ReportCard
              key={i}
              rank={i + 1}
              amount={l.amount}
              maxPercent={maxPercent}
              title={l.title}
              percent={l.percent}
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
};
