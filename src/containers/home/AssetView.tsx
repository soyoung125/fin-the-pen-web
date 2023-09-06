import EasyAuthentication from "../sign/EasyAuthentication";
import AssetPreview from "./HomeContainer/view/AssetPreview";
import { useRecoilValue } from "recoil";
import { isAuthenticatedState } from "../../app/recoil/isAuthenticated.ts";

function AssetView() {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);

  return (
    <>
      <EasyAuthentication />
      {isAuthenticated && <AssetPreview />}
    </>
  );
}
export default AssetView;
