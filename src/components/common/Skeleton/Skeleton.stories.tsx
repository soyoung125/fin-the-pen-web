import Skeleton from "./Skeleton";
import { BoxProps, Typography } from "@mui/material";

const meta = {
  title: "Common/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    height: "100px",
    width: "250px",
    borderRadius: "6px",
  },
  argTypes: {
    height: {
      control: {
        type: "text",
      },
      description: "높이를 지정할 수 있습니다. 기본 값은 1rem 입니다.",
    },
    width: {
      control: {
        type: "text",
      },
      description: "너비를 지정할 수 있습니다. 기본 값은 100% 입니다.",
    },
    borderRadius: {
      control: {
        type: "text",
      },
      description:
        "모서리의 둥근 정도를 설정할 수 있습니다. 기본 값은 6px 입니다.",
    },
  },
};

export default meta;

export const Default = (args: BoxProps) => {
  return (
    <>
      <Typography>
        Mui의 Box컴포넌트의 확장 컴포넌트로써, 기존 기능을 100% 사용 가능합니다.
      </Typography>
      <Skeleton {...args} />
    </>
  );
};

export const Example = () => {
  return (
    <>
      <Skeleton mb={2} />
      <Skeleton width="40rem" height="30rem" mb={2} />
      <Skeleton width="10rem" height="10rem" borderRadius="50%" />
    </>
  );
};

export const Spacing = () => {
  return (
    <>
      <Skeleton width="10rem" height="10rem" />
      <Skeleton width="10rem" height="10rem" my={10} />
      <Skeleton width="10rem" height="10rem" />
    </>
  );
};
