import type { Meta } from "@storybook/react";
import { useState } from "react";
import OptionButton, { OptionButtonProps } from "./OptionButton.tsx";

const meta = {
  title: "ui/ScheduleDrawer/repeat-picker/button/OptionButton",
  component: OptionButton,
  tags: ["autodocs"],
  args: { contents: "21일마다 반복", isSelected: false, id: "todayRepeat" },
  argTypes: {},
} satisfies Meta<typeof OptionButton>;

export default meta;

export const Default = (args: OptionButtonProps) => {
  return (
    <div style={{ width: "200px" }}>
      <OptionButton {...args} />
    </div>
  );
};

export const Dynamic = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ width: "200px" }}>
      <OptionButton
        contents="반복할 날짜 선택"
        isSelected={selected}
        handleClick={() => setSelected(!selected)}
      />
    </div>
  );
};

export const Dynamics = () => {
  const options = ["MonthAndDay", "NthDayOfMonth", "LastDayOfMonth"];
  const [selectedList, setSelectedList] = useState<string>("MonthAndDay");
  return (
    <div style={{ width: "200px" }}>
      {options.map((option, index) => (
        <OptionButton
          key={index}
          id={option}
          contents={option}
          isSelected={selectedList.includes(option)}
          handleClick={() => setSelectedList(option)}
        />
      ))}
    </div>
  );
};
