import { Box, IconButton, Stack } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RoundedPaper from "../../../../../components/common/RoundedPaper";
import ModalStaticBackdrop from "../../../../../components/layouts/ModalStaticBackdrop";
import RoundedBorderBox from "../../../../../components/common/RoundedBorderBox";
import InputModal from "./InputModal";
import AlertModal from "../../../../../components/common/AlertModal";
import useModal_deprecated from "@hooks/useModal_deprecated.ts";
import { SavingGoal } from "@app/types/asset.ts";
import { getAmount } from "@legacies/assetManagement/SavingsGoalContainer/utils.ts";

interface SavingProps {
  saving?: SavingGoal;
}

function Saving({ saving }: SavingProps) {
  const {
    modalOpen: savingGoalModalOpen,
    openModal: openSavingGoalModal,
    closeModal: closeSavingGoalModal,
  } = useModal_deprecated();
  const {
    modalOpen: alertModalOpen,
    openModal: openAlertModal,
    closeModal: closeAlertModal,
  } = useModal_deprecated();

  // const saving = useSelector(selectSavingGoal);

  const foo = () => {
    closeAlertModal();
    openSavingGoalModal();
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
          <Box sx={{ typography: "h6", fontWeight: "bold" }}>1 Year Goal</Box>
          <IconButton color="primary" onClick={openAlertModal} sx={{ p: 0 }}>
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
            {getAmount(saving?.years_goal_amount)}원
          </Box>
        </RoundedBorderBox>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pb={1}
          pt={2}
        >
          <Box sx={{ typography: "h6", fontWeight: "bold" }}>1 Month Goal</Box>
          {/* <IconButton color="primary" onClick={() => setOpenAlertModal(true)}>
            <BorderColorIcon fontSize="small" />
          </IconButton> */}
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
            {getAmount(saving?.months_goal_amount)}원
          </Box>
        </RoundedBorderBox>
      </RoundedPaper>

      <ModalStaticBackdrop
        keepMounted
        width="xs"
        open={savingGoalModalOpen}
        component={<InputModal closeSavingGoalModal={closeSavingGoalModal} />}
      />

      <AlertModal
        open={alertModalOpen}
        handleClose={closeAlertModal}
        handleClickYes={() => foo()}
        mode="modify"
      />
    </>
  );
}

export default Saving;
