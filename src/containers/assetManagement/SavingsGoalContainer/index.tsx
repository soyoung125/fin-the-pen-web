import { Box, IconButton, Stack } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import Saving from "./goals/Saving";
import Personal from "./goals/Personal";
import { PATH } from "../../../constants/path.ts";
import { useUser } from "@app/tanstack-query/useUser.ts";

function SavingsGoal() {
  const { data: user } = useUser();
  const navigate = useNavigate();

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

      <Saving />

      <Personal />
    </>
  );
}

export default SavingsGoal;
