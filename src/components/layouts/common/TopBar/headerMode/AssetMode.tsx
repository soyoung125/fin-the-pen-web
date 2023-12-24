import { Stack } from "@mui/material";
import LogoButton from "../buttons/LogoButton.tsx";
import PersonalButton from "../buttons/PersonalButton.tsx";
import BackButton from "../buttons/BackButton.tsx";

function AssetMode() {
  return (
    <>
      {/* 헤더 좌측 메뉴 */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <BackButton />
      </Stack>

      {/* 헤더 중앙 메뉴 */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <LogoButton />
      </Stack>

      {/* 헤더 우측 메뉴 */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <PersonalButton />
      </Stack>
    </>
  );
}

export default AssetMode;
