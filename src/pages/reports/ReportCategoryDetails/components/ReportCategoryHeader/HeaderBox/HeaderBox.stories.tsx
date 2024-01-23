import { Meta } from "@storybook/react";
import HeaderBox from "./HeaderBox";

const meta = {
  title: "reports/ReportCategoryDetails/ReportCategoryHeader/HeaderBox",
  component: HeaderBox,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof HeaderBox>;

export default meta;

export const Default = () => {
  return <HeaderBox>header box</HeaderBox>;
};
