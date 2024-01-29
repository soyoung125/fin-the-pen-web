import PredictBox, { PredictBoxProps } from "./PredictBox";
import { Meta } from "@storybook/react";
import { Stack } from "@mui/material";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import MoneyIcon from "@mui/icons-material/Money";

const meta = {
  title: "reports/ReportMonthDetails/PredictBox",
  component: PredictBox,
  tags: ["autodocs"],
  args: {
    amount: 0,
    title: "제목제목",
    titleIcon: <ScatterPlotIcon />,
    navigateIcon: <ScatterPlotIcon fontSize="small" />,
    handleClick: () => alert("click!"),
  },
  argTypes: {},
} satisfies Meta<typeof PredictBox>;

export default meta;

export const Default = (args: PredictBoxProps) => {
  return <PredictBox {...args} />;
};

export const Example = () => {
  return (
    <Stack direction="row" gap="10px">
      <PredictBox
        title="지출 목표액"
        titleIcon={<AccountBalanceWalletIcon />}
        amount={1200000}
        navigateIcon={<SettingsIcon fontSize="small" />}
      />
      <PredictBox title="지출 금액" titleIcon={<MoneyIcon />} amount={579000} />
    </Stack>
  );
};
