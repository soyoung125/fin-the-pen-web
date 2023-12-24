import { Box, Stack } from "@mui/material";
import BackButton from "../buttons/BackButton.tsx";
import { useAppSelector } from "@redux/hooks.ts";
import { selectHeaderTitle } from "@redux/slices/commonSlice.tsx";

function SettingsMode() {
  const title = useAppSelector(selectHeaderTitle);
  return (
    <>
      {/* 헤더 좌측 메뉴 */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <BackButton />
        <Box sx={{ fontSize: "18px", fontWeight: "500" }}>{title}</Box>
      </Stack>

      {/* 헤더 중앙 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      />

      {/* 헤더 우측 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      />
    </>
  );
}

export default SettingsMode;
