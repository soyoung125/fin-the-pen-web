import { Box, IconButton, Stack } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import Saving from "./goals/Saving/Saving.tsx";
import Personal from "./goals/Personal/Personal.tsx";
import { PATH } from "@constants/path.ts";
import { useUser } from "@app/tanstack-query/useUser.ts";
import useSavingGoal from "@hooks/assetManagement/useSavingGoal.ts";

function SavingsGoal() {
  const { data: user } = useUser();
  const navigate = useNavigate();
  const { goal, handleSetSavingGoal, handleSetPersonalGoal } = useSavingGoal();

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ fontWeight: "bold" }}>
          {`"${user?.name}"님의 한해 저축 목표입니다.`}
        </Box>
        <IconButton
          color="primary"
          sx={{ p: 0 }}
          onClick={() => navigate(PATH.savingDetailSetting)}
        >
          <SettingsIcon />
        </IconButton>
      </Stack>

      <Saving
        saving={goal?.goal_amount}
        handleSetSavingGoal={handleSetSavingGoal}
      />

      <Personal
        personal={goal?.personal_goal}
        handleSetPersonalGoal={handleSetPersonalGoal}
      />
    </>
  );
}

export default SavingsGoal;