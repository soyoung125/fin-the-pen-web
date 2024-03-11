import { Box, Grid, IconButton, Stack } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RoundedBorderBox from "../../../../../components/common/RoundedBorderBox";
import InputModal from "./InputModal";
import { PersonalGoal, SetPersonalGoalQuery } from "@app/types/asset.ts";
import { getAmount } from "@legacies/assetManagement/SavingsGoalContainer/utils.ts";
import { useDialog } from "@hooks/dialog/useDialog.tsx";
import { useModal } from "@hooks/modal/useModal.tsx";

interface PersonalProps {
  personal?: PersonalGoal;
  handleSetPersonalGoal: (data: SetPersonalGoalQuery) => void;
}

function Personal({ personal, handleSetPersonalGoal }: PersonalProps) {
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
            closeModal={closeModal}
            personal={personal}
            handleSetPersonalGoal={handleSetPersonalGoal}
          />
        ),
        isBackdropClickable: true,
      });
    }
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ fontWeight: "bold" }}>당신의 또 다른 목표는 무엇인가요?</Box>
        <IconButton color="primary" onClick={handleModify}>
          <BorderColorIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Grid container spacing={1} textAlign="center" mt={0}>
        <Grid item xs={6}>
          <Stack
            justifyContent="space-around"
            sx={{
              borderRadius: 2,
              backgroundColor: "primary.main",
              color: "white",
              p: 2,
              height: "100%",
            }}
          >
            <Box mb={2}>나의 목표</Box>
            <Box>{personal?.goal_name}</Box>
            <Box>{getAmount(personal?.goal_amount)}원</Box>
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <RoundedBorderBox>
            <Stack direction="row" justifyContent="space-between" p={2}>
              <Box>기간</Box>
              <Box sx={{ color: "primary.main" }}>{personal?.period}</Box>
            </Stack>
          </RoundedBorderBox>

          <Box my={1} />

          <RoundedBorderBox>
            <Box p={2}>
              <Box mb={1}>핀더펜 MONEY</Box>
              <Box sx={{ color: "primary.main" }}>
                {getAmount(personal?.goal_amount)}원
              </Box>
            </Box>
          </RoundedBorderBox>
        </Grid>
      </Grid>
    </>
  );
}

export default Personal;
