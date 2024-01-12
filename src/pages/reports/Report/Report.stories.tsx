import { Meta } from "@storybook/react";
import { Stack } from "@mui/material";
import ReportTitle from "@pages/reports/Report/components/ReportTitle";
import ReportBox from "pages/reports/Report/components/layout/ReportBox";
import PredictBox from "@pages/reports/Report/components/PredictBox";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TopNavigationBar from "@components/layouts/common/TopNavigationBar";
import ReportLayout from "@pages/reports/Report/components/layout/ReportLayout";

const meta = {
  title: "reports/Report",
  component: undefined,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta;

export default meta;

export const PageExample = () => {
  return (
    <>
      <TopNavigationBar onClick={() => alert("hey")} title="월간 소비 리포트" />
      <Stack bgcolor="#F7F7F8" px="20px" py="24px" gap="24px">
        <ReportTitle
          year={2023}
          month={5}
          amount={333000000}
          pickMonth={() => alert("pick month")}
        />
        <Stack direction="row" gap="10px">
          <PredictBox
            title="이번 달 목표 지출"
            titleIcon={<AccountBalanceWalletIcon />}
            amount={1200000}
            navigateIcon={<SettingsIcon />}
            handleClick={() => alert("goal")}
          />
          <PredictBox
            title="사용 가능 금액"
            titleIcon={<InfoOutlinedIcon />}
            amount={579000}
            navigateIcon={<InfoOutlinedIcon />}
            handleClick={() => alert("useable amount")}
          />
        </Stack>
        <ReportBox
          content={
            <ReportLayout
              title="월간 소비 리포트"
              navigateTo="/somewhere"
              content={<div>원형 그래프 미구현</div>}
            />
          }
        />
        <ReportBox
          content={
            <Stack spacing={5}>
              <ReportLayout
                title="소비 예측 리포트"
                content={<div>막대 그래프 미구현</div>}
              />
              <ReportLayout
                title="N월 고정 입출금"
                content={<div>카드 미구현</div>}
              />
              <ReportLayout
                title="월별 소비 리포트"
                content={<div>선 그래프 미구현</div>}
              />
            </Stack>
          }
        />
      </Stack>
    </>
  );
};
