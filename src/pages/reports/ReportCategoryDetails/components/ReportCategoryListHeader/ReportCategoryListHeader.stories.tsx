import { Meta } from "@storybook/react";
import ReportCategoryListHeader, {
  ReportCategoryListHeaderProps,
} from "./ReportCategoryListHeader.tsx";

const meta = {
  title: "reports/ReportCategoryDetails/ReportCategoryListHeader",
  component: ReportCategoryListHeader,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ReportCategoryListHeader>;

export default meta;

export const Default = (args: ReportCategoryListHeaderProps) => {
  return <ReportCategoryListHeader {...args} />;
};
