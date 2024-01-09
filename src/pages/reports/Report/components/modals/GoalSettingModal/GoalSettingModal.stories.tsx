import { useModal } from "@hooks/modal/useModal.tsx";
import { Button } from "@mui/material";
import { Meta } from "@storybook/react";
import GoalSettingModal from "./index.ts";

export const Example = () => {
  const { openModal, closeModal } = useModal();
  const handleClickableBackdropModalOpen = () => {
    openModal({
      modalElement: (
        <GoalSettingModal
          closeModal={closeModal}
          handleSubmit={(v) => alert(v)}
        />
      ),
      isBackdropClickable: true,
    });
  };

  return (
    <Button
      variant="outlined"
      color="info"
      onClick={handleClickableBackdropModalOpen}
    >
      goal setting
    </Button>
  );
};

const meta = {
  title: "reports/Report/modals/GoalSettingModal",
  component: Example,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Example>;

export default meta;
