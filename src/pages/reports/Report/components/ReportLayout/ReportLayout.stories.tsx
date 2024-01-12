import { Meta } from "@storybook/react";
import { Box } from "@mui/material";
import ReportLayout, { ReportLayoutProps } from "./ReportLayout.tsx";

const meta = {
  title: "reports/Report/ReportLayout",
  component: ReportLayout,
  tags: ["autodocs"],
  args: {
    title: "리포트 이름",
    navigateTo: "/report/2021-05",
    content: "리포트 콘텐츠 컴포넌트가 올 자리",
  },
  argTypes: {
    navigateTo: {
      description:
        "더보기 버튼을 눌렀을 때 이동할 경로를 지정합니다. 텍스트가 없으면 뜨지 않습니다.",
    },
    content: {
      description:
        "컴포넌트가 올 자리입니다. 실제 환경에서는 텍스트가 오지 않습니다. ",
    },
  },
} satisfies Meta<typeof ReportLayout>;

export default meta;

export const Default = (args: ReportLayoutProps) => {
  return <ReportLayout {...args} />;
};
