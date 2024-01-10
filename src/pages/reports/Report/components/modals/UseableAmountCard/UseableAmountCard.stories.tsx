import { Meta } from "@storybook/react";
import UseableAmountCard from "./index.ts";

export const Example = () => {
  return <UseableAmountCard />;
};

const meta = {
  title: "reports/Report/modals/useableAmountCard",
  component: Example,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Example>;

export default meta;
