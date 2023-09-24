import { Box, Stack, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../../app/redux/slices/userSlice";
import Saving from "./goals/Saving";
import Personal from "./goals/Personal";
import PATH from "../../../constants/path";

function SavingsGoal() {
  const user = useSelector(selectUser);
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
