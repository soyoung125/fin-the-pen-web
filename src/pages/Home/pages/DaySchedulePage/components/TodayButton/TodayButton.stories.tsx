import { Meta } from "@storybook/react";
import TodayButton, { TodayButtonProps } from "./TodayButton.tsx";
import { Box } from "@mui/material";

const meta = {
  title: "Home/DaySchedulePage/TodayButton",
  component: TodayButton,
  tags: ["autodocs"],
  args: { goToday: () => alert("go today") },
  argTypes: {},
} satisfies Meta<typeof TodayButton>;

export default meta;

export const Default = (args: TodayButtonProps) => {
  return (
    <Box height={150}>
      <TodayButton {...args} />
    </Box>
  );
};
