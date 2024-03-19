import PersonalCard from "@pages/Settings/components/PersonalCard/PersonalCard.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "Settings/PersonalCard",
  component: PersonalCard,
  tags: ["autodocs"],
  args: { name: "user name" },
  argTypes: {
    name: {
      description:
        "사용자의 이름을 표시하기 위한 변수입니다. 전달하지 않으면 카드 클릭 시 로그인 페이지로 이동하며, 값이 전달되었을 경우 마이페이지로 이동하게 됩니다.",
    },
  },
} satisfies Meta<typeof PersonalCard>;

export default meta;

export const Default = () => {
  return <PersonalCard />;
};
