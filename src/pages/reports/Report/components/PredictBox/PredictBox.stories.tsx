import { Meta } from "@storybook/react";
import PredictBox, { PredictBoxProps } from "./PredictBox.tsx";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Stack } from "@mui/material";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import SettingsIcon from "@mui/icons-material/Settings";

const meta = {
  title: "reports/Report/PredictBox",
  component: PredictBox,
  tags: ["autodocs"],
  args: {
    amount: 0,
    title: "제목제목",
    titleIcon: <ScatterPlotIcon />,
    navigateTo: "/somewhere",
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
        title="이번 달 목표 지출"
        titleIcon={<AccountBalanceWalletIcon />}
        amount={1200000}
        navigateIcon={<SettingsIcon />}
      />
      <PredictBox
        title="사용 가능 금액"
        titleIcon={<InfoOutlinedIcon />}
        amount={579000}
      />
    </Stack>
  );
};
