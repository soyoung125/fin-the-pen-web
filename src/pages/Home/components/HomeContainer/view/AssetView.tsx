import EasyAuthentication from "@components/sign/EasyAuthentication.tsx";
import AssetPreview from "@pages/Home/components/HomeContainer/view/AssetPreview.tsx";
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
