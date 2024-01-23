import { Meta } from "@storybook/react";
import ReportCategoryHeader, {
  ReportCategoryHeaderProps,
} from "./ReportCategoryHeader";

const meta = {
  title: "reports/ReportCategoryDetails/ReportCategoryHeader",
  component: ReportCategoryHeader,
  tags: ["autodocs"],
  args: {
    year: 2023,
    month: 5,
    subtractMonth: () => alert("last month"),
    addMonth: () => alert("next month"),
    changeMonth: () => alert("change year and month"),
    handleClickSearch: () => alert("click search"),
    handleClickFilter: () => alert("click filter"),
  },
  argTypes: {
    handleClickSearch: {
      description: "돋보기 아이콘을 클릭했을 때 동작하는 이벤트입니다.",
    },
    handleClickFilter: {
      description: "필터 아이콘을 클릭했을 떄 동작하는 이벤트입니다.",
    },
  },
} satisfies Meta<typeof ReportCategoryHeader>;

export default meta;

export const Default = (args: ReportCategoryHeaderProps) => {
  return <ReportCategoryHeader {...args} />;
};
