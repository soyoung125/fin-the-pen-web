import EasyAuthentication from "../sign/EasyAuthentication";
import AssetPreview from "./HomeContainer/view/AssetPreview";
import { useAppSelector } from "@redux/hooks.ts";
import { selectIsAuthenticated } from "@redux/slices/commonSlice.tsx";

function AssetView() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <>
      <EasyAuthentication />
      {isAuthenticated && <AssetPreview />}
    </>
  );
}
export default AssetView;
