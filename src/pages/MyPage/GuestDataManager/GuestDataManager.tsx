import { Stack, Typography } from "@mui/material";
import DataBackUpButton from "./DataBackUpButton.tsx";
import DataRecoveryButtons from "./DataRecoveryButtons.tsx";

function GuestDataManager() {
  return (
    <Stack spacing={2} m={2} border={1} p={2}>
      <Typography variant="h5">게스트 계정 전용 메뉴 (사용가능)</Typography>
      <DataRecoveryButtons />
      <DataBackUpButton />
    </Stack>
  );
}
export default GuestDataManager;
