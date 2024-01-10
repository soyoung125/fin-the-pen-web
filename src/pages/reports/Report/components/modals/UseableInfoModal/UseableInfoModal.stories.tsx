import { useModal } from "@hooks/modal/useModal.tsx";
import { Button } from "@mui/material";
import { Meta } from "@storybook/react";
import UseableInfoModal from "./index.ts";

export const Example = () => {
  const { openModal, closeModal } = useModal();
  const handleClickableBackdropModalOpen = () => {
    openModal({
      modalElement: <UseableInfoModal closeModal={closeModal} />,
      isBackdropClickable: true,
    });
  };

  return (
    <Button
      variant="outlined"
      color="info"
      onClick={handleClickableBackdropModalOpen}
    >
      useable amount info
    </Button>
  );
};

const meta = {
  title: "reports/Report/modals/useableInfoModal",
  component: Example,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Example>;

export default meta;
