import { Meta } from "@storybook/react";
import ReportBox, { ReportBoxProps } from "./ReportBox.tsx";
import { Box } from "@mui/material";

const meta = {
  title: "reports/Report/ReportBox",
  component: ReportBox,
  tags: ["autodocs"],
  args: {
    content: "리포트 콘텐츠 컴포넌트가 올 자리",
  },
  argTypes: {
    content: {
      description:
        "컴포넌트가 올 자리입니다. 실제 환경에서는 텍스트가 오지 않습니다.",
    },
  },
} satisfies Meta<typeof ReportBox>;

export default meta;

export const Default = (args: ReportBoxProps) => {
  return (
    <Box bgcolor="#F7F7F8" px="20px" py="24px">
      <ReportBox {...args} />
    </Box>
  );
};
