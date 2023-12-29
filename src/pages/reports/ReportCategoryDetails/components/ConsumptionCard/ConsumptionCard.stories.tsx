import { Meta } from "@storybook/react";
import ConsumptionCard, { ConsumptionCardProps } from "./ConsumptionCard.tsx";

const meta = {
  title: "reports/ReportCategoryDetails/ConsumptionCard",
  component: ConsumptionCard,
  tags: ["autodocs"],
  args: {
    name: "커피",
    price: 3000,
    date: "2023.1.10. 12:35",
    balance: 10000,
    cardCompany: "신한카드",
  },
  argTypes: {},
} satisfies Meta<typeof ConsumptionCard>;

export default meta;

export const Default = (args: ConsumptionCardProps) => {
  return <ConsumptionCard {...args} />;
};
