import type { Meta } from "@storybook/react";
import CategoryButton, { CategoryButtonProps } from "./CategoryButton";
import { useState } from "react";

const meta = {
  title: "ui/ScheduleDrawer/CategoryButton",
  component: CategoryButton,
  tags: ["autodocs"],
  args: { category: "카테고리", selected: true },
  argTypes: {},
} satisfies Meta<typeof CategoryButton>;

export default meta;

export const Default = (args: CategoryButtonProps) => {
  return (
    <div style={{ width: "500px" }}>
      <CategoryButton {...args} />
    </div>
  );
};

export const Dynamic = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ width: "500px" }}>
      <CategoryButton
        category="카테고리"
        selected={selected}
        onClick={() => setSelected(!selected)}
      />
    </div>
  );
};

export const Dynamics = () => {
  const [selectedList, setSelectedList] = useState([
    false,
    false,
    true,
    false,
    true,
    false,
    false,
  ]);
  return (
    <div style={{ width: "500px" }}>
      {selectedList.map((selected, index) => (
        <CategoryButton
          key={index}
          category={`카테고리${index}`}
          selected={selected}
          onClick={() => {
            const newList = [...selectedList];
            newList[index] = !selected;
            setSelectedList(newList);
          }}
        />
      ))}
    </div>
  );
};
