import { Meta } from "@storybook/react";
import { useState } from "react";
import ScheduleListHeader, {
  ReportListHeaderProps,
} from "@components/ScheduleList/ScheduleListHeader/ScheduleListHeader.tsx";

const meta = {
  title: "ScheduleList/ScheduleListHeader",
  component: ScheduleListHeader,
  tags: ["autodocs"],
  args: {
    count: 10,
    selectedOption: "최신순",
    options: ["최신순", "과거순", "높은 금액순", "낮은 금액순"],
    setSelectedOption: () => alert("아래에서 테스트해주세요"),
  },
  argTypes: {
    count: {
      description: "선택한 달의 카테고리 일정의 총 개수입니다.",
    },
    options: {
      description: "선택할 수 있는 옵션들. 최소 1개 이상의 옵션이 필요합니다.",
    },
    selectedOption: {
      description:
        "현재 선택된 옵션 state. 기본 값은 첫 번째 옵션으로 줘야 합니다.",
    },
    setSelectedOption: {
      description: "옵션을 선택했을 때 실행되는 setState입니다.",
    },
  },
} satisfies Meta<typeof ScheduleListHeader>;

export default meta;

export const Default = (args: ReportListHeaderProps) => {
  return <ScheduleListHeader {...args} />;
};

export const Example = () => {
  const options = ["옵션1", "옵션2", "옵션3", "옵션4"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <>
      <div>현재 상태 : {selectedOption}</div>
      <ScheduleListHeader
        count={10}
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div style={{ height: "300px" }}></div>
    </>
  );
};
