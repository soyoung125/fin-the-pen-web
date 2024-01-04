import { Meta } from "@storybook/react";
import { Box, Button } from "@mui/material";
import { useModal } from "./useModal.tsx";

export const Example = () => {
  const { openModal, closeModal } = useModal();
  const handleClickableBackdropModalOpen = () => {
    openModal({
      modalElement: (
        <Box p={5}>
          <div>백드롭을 눌러도 닫혀요</div>
          <Button variant="contained" color="error" onClick={closeModal}>
            모달 닫기
          </Button>
        </Box>
      ),
      isBackdropClickable: true,
    });
  };

  const handleUnclickableBackdropModalOpen = () => {
    openModal({
      modalElement: (
        <Box p={5}>
          <div>백드롭을 눌러도 닫히지 않아요</div>
          <Button variant="contained" color="error" onClick={closeModal}>
            모달 닫기
          </Button>
        </Box>
      ),
      isBackdropClickable: false,
    });
  };

  return (
    <>
      <Button
        variant="outlined"
        color="info"
        onClick={handleClickableBackdropModalOpen}
      >
        백드롭을 눌렀을 때 닫히는 모달 열기
      </Button>
      <Button
        variant="outlined"
        color="warning"
        onClick={handleUnclickableBackdropModalOpen}
      >
        백드롭을 눌러도 닫히지 않는 모달 열기
      </Button>
    </>
  );
};

const meta = {
  title: "common/useModal",
  component: Example,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Example>;

export default meta;
