import { Meta } from "@storybook/react";
import ScheduleCard, { ConsumptionCardProps } from "./ScheduleCard.tsx";
import ScheduleCardSkeleton from "./ScheduleCardSkeleton.tsx";
import { INIT_PERIOD } from "@constants/schedule.ts";
import moment from "moment";

const meta = {
  title: "ScheduleList/ScheduleCard",
  component: ScheduleCard,
  tags: ["autodocs"],
  args: {
    schedule: {
      event_name: "커피",
      price_type: "-",
      amount: "3000",
      start_date: "2023-10-06",
      end_date: "2023-10-06",
      start_time: "08:00",
      end_time: "11:00",
      category: "외식",
      all_day: false,
      repeat_kind: "NONE",
      repeat_options: { value: "1", options: "" },
      period: INIT_PERIOD(moment("2023-10-06")),
      fix_amount: false,
      importance: "상",
      exclude: Math.floor(Math.random() * 2) === 0,
    },
    isRepeat: false,
  },
  argTypes: {},
} satisfies Meta<typeof ScheduleCard>;

export default meta;

export const Default = (args: ConsumptionCardProps) => {
  return <ScheduleCard {...args} />;
};

export const Skeleton = () => {
  return <ScheduleCardSkeleton />;
};
