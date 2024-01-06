import { Meta } from "@storybook/react";
import MonthlyScheduleSummary, {
  MonthlyScheduleSummaryProps,
} from "./MonthlyScheduleSummary.tsx";

const meta = {
  title: "Home/HomeHeader/MonthlyScheduleSummary",
  component: MonthlyScheduleSummary,
  tags: ["autodocs"],
  args: {
    scheduleCount: 15,
    onClickNavigateButton: () => alert("클릭"),
  },
  argTypes: {
    scheduleCount: {
      control: {
        type: "number",
      },
    },
  },
} satisfies Meta<typeof MonthlyScheduleSummary>;

export default meta;

export const Default = (args: MonthlyScheduleSummaryProps) => (
  <MonthlyScheduleSummary {...args} />
);
