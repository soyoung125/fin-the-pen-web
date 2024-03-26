import { Stack } from "@mui/material";
import LogoButton from "../buttons/LogoButton.tsx";
import PersonalButton from "../buttons/PersonalButton.tsx";
import SelectAssetMenu from "@components/layouts/common/TopBar/SelectAssetMenu";
import useAsset from "@hooks/assetManagement/useAsset.ts";
import assetManagements from "@constants/managements.ts";

function AssetMode() {
  const { assetMenu, setMenu } = useAsset();
  return (
    <>
      {/* 헤더 좌측 메뉴 */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {/*<BackButton />*/}
        <LogoButton />
      </Stack>

      {/* 헤더 중앙 메뉴 */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {/*<LogoButton />*/}
        <SelectAssetMenu
          selectedOption={assetMenu}
          setSelectedOption={setMenu}
          options={assetManagements.map((a) => a.title)}
        />
      </Stack>

      {/* 헤더 우측 메뉴 */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <PersonalButton />
      </Stack>
    </>
  );
}

export default AssetMode;
