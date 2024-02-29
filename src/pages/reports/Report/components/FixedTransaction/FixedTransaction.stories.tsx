import FixedTransaction, {
  FixedTransactionProps,
} from "@pages/reports/Report/components/FixedTransaction/FixedTransaction.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "reports/Report/FixedTransaction",
  component: FixedTransaction,
  tags: ["autodocs"],
  args: {
    title: "고정수입",
    amount: 12000000,
    month: "5",
    difference: -200000,
  },
  argTypes: {},
} satisfies Meta<typeof FixedTransaction>;

export default meta;

export const Default = (args: FixedTransactionProps) => {
  return <FixedTransaction {...args} />;
};
