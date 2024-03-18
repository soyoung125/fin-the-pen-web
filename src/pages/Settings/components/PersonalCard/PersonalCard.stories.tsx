import PersonalCard from "@pages/Settings/components/PersonalCard/PersonalCard.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "Settings/PersonalCard",
  component: PersonalCard,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof PersonalCard>;

export default meta;

export const Default = () => {
  return <PersonalCard />;
};
