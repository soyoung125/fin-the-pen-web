import { Meta } from "@storybook/react";
import TodayButton, { TodayButtonProps } from "./TodayButton.tsx";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const meta = {
  title: "common/TodayButton",
  component: TodayButton,
  tags: ["autodocs"],
  args: { goToday: () => alert("go today"), type: "day" },
  argTypes: {
    type: { description: "이동 기준을 나타내며 월, 주, 일 중 선택할 수 있다." },
  },
} satisfies Meta<typeof TodayButton>;

export default meta;

export const Default = (args: TodayButtonProps) => {
  return (
    <Box height={150}>
      <TodayButton {...args} />
    </Box>
  );
};

export const Example = () => {
  const [type, setType] = useState<"day" | "week" | "month">("day");

  return (
    <Box height={150}>
      <TodayButton goToday={() => alert("today")} type={type} />
      <Box pt={10}>
        <Button onClick={() => setType("day")}>오늘</Button>
        <Button onClick={() => setType("week")}>이번주</Button>
        <Button onClick={() => setType("month")}>이번달</Button>
      </Box>
    </Box>
  );
};
