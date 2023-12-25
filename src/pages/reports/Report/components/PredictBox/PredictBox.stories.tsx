import { Meta } from "@storybook/react";
import PredictBox, { PredictBoxProps } from "./PredictBox.tsx";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const meta = {
  title: "reports/Report/PredictBox",
  component: PredictBox,
  tags: ["autodocs"],
  args: {
    amount: 120000,
    title: "이번 달 목표 지출",
    titleIcon: <AccountBalanceWalletIcon />,
  },
  argTypes: {},
} satisfies Meta<typeof PredictBox>;

export default meta;

export const Default = (args: PredictBoxProps) => {
  return <PredictBox {...args} />;
};
