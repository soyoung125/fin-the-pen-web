import ShowMoreButton, { ShowMoreButtonProps } from "./ShowMoreButton.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "Home/ScheduleList/ShowMoreButton",
  component: ShowMoreButton,
  tags: ["autodocs"],
  args: { count: 7 },
  argTypes: {},
} satisfies Meta<typeof ShowMoreButton>;

export default meta;

export const Default = (args: ShowMoreButtonProps) => {
  return <ShowMoreButton {...args} />;
};
