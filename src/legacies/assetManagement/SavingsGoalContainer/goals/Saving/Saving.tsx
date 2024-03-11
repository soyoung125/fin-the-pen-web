import { Box, IconButton, Stack, Typography } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RoundedPaper from "../../../../../components/common/RoundedPaper";
import ModalStaticBackdrop from "../../../../../components/layouts/ModalStaticBackdrop";
import RoundedBorderBox from "../../../../../components/common/RoundedBorderBox";
import InputModal from "./InputModal";
import useModal_deprecated from "@hooks/useModal_deprecated.ts";
import { SavingGoal } from "@app/types/asset.ts";
import { getAmount } from "@legacies/assetManagement/SavingsGoalContainer/utils.ts";
import { useDialog } from "@hooks/dialog/useDialog.tsx";
import { useModal } from "@hooks/modal/useModal.tsx";
import UseableInfoModal from "@pages/reports/Report/components/modals/UseableInfoModal";

interface SavingProps {
  saving?: SavingGoal;
  handleSetSavingGoal: (amount: number) => void;
}

function Saving({ saving, handleSetSavingGoal }: SavingProps) {
  const { openConfirm } = useDialog();
  const { openModal, closeModal } = useModal();

  const handleModify = async () => {
    const answer = await openConfirm({
      title: "알림",
      content: "정보를 수정하시겠습니까?",
      approveText: "네",
      rejectText: "아니오",
    });
    if (answer) {
      openModal({
        modalElement: (
          <InputModal
            closeSavingGoalModal={closeModal}
            saving={saving}
            handleSetSavingGoal={handleSetSavingGoal}
          />
        ),
        isBackdropClickable: true,
      });
    }
  };

  return (
    <>
      <RoundedPaper my={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pb={1}
        >
          <Typography variant="h1">1 Year Goal</Typography>
          <IconButton color="primary" onClick={handleModify} sx={{ p: 0 }}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
        <RoundedBorderBox>
          <Box
            sx={{
              typography: "h6",
              fontWeight: "bold",
              color: "primary.main",
              textAlign: "end",
              p: 2,
            }}
          >
            {getAmount(saving?.years_goal_amount).toLocaleString()}원
          </Box>
        </RoundedBorderBox>

        <Typography variant="h1" pb={1} pt={2}>
          1 Month Goal
        </Typography>
        <RoundedBorderBox>
          <Box
            sx={{
              typography: "h6",
              fontWeight: "bold",
              color: "primary.main",
              textAlign: "end",
              p: 2,
            }}
          >
            {getAmount(saving?.months_goal_amount).toLocaleString()}원
          </Box>
        </RoundedBorderBox>
      </RoundedPaper>
    </>
  );
}

export default Saving;
