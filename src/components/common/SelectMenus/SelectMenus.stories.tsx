import { Meta } from "@storybook/react";

import SelectMenus, {
  SelectMenusProps,
} from "@components/common/SelectMenus/SelectMenus.tsx";
import { useState } from "react";

const meta = {
  title: "common/SelectMenus",
  component: SelectMenus,
  tags: ["autodocs"],
  args: {
    options: ["최신순", "과거순", "높은 금액순", "낮은 금액순"],
    selectedOption: "최신순",
    setSelectedOption: () => alert("아래에서 테스트해주세요"),
  },
  argTypes: {},
} satisfies Meta<typeof SelectMenus>;

export default meta;

export const Default = (args: SelectMenusProps) => {
  return <SelectMenus {...args} />;
};

export const Example = () => {
  const options = ["최신순", "과거순", "높은 금액순", "낮은 금액순"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <SelectMenus
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />
  );
};
