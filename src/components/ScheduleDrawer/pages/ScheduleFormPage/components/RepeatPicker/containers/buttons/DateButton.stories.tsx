import type { Meta } from "@storybook/react";
import { useState } from "react";
import DateButton, { DateButtonProps } from "./DateButton.tsx";

const meta = {
  title: "ui/ScheduleDrawer/repeat-picker/button/DateButton",
  component: DateButton,
  tags: ["autodocs"],
  args: { value: "월", isSelected: false },
  argTypes: {},
} satisfies Meta<typeof DateButton>;

export default meta;

export const Default = (args: DateButtonProps) => {
  return (
    <div style={{ width: "500px" }}>
      <DateButton {...args} />
    </div>
  );
};

export const Dynamic = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ width: "500px" }}>
      <DateButton
        value="월"
        isSelected={selected}
        handleClick={() => setSelected(!selected)}
      />
    </div>
  );
};

export const Dynamics = () => {
  const dates = Array.from({ length: 7 }, (_, i) => (i + 1).toString());
  const [selectedList, setSelectedList] = useState<string[]>([]);
  return (
    <div style={{ width: "500px" }}>
      {dates.map((date, index) => (
        <DateButton
          key={index}
          value={date}
          isSelected={selectedList.includes(date)}
          handleClick={() => {
            if (selectedList.includes(date)) {
              setSelectedList(selectedList.filter((s) => s !== date));
            } else {
              setSelectedList(selectedList.concat(date));
            }
          }}
        />
      ))}
    </div>
  );
};
