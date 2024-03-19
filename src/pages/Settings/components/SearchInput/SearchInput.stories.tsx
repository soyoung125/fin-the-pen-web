import SearchInput, {
  SearchInputProps,
} from "@pages/Settings/components/SearchInput/SearchInput.tsx";
import { Meta } from "@storybook/react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { ChangeEvent, useState } from "react";

const meta = {
  title: "Settings/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  args: {
    placeholder: "placeholder",
    value: "",
    SearchIcon: <SearchRoundedIcon />,
  },
  argTypes: {},
} satisfies Meta<typeof SearchInput>;

export default meta;

export const Default = (args: SearchInputProps) => {
  return <SearchInput {...args} />;
};

export const Example = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <SearchInput
      placeholder="검색어를 입력하세요."
      value={value}
      handleChange={handleChange}
      SearchIcon={<SearchRoundedIcon color="primary" />}
    />
  );
};
