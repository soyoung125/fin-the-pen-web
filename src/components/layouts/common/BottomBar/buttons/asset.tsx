import asset_primary from "@assets/icons/bottom/asset_primary.svg";
import asset_secondary from "@assets/icons/bottom/asset_secondary.svg";
import { ButtonIcon } from "@components/layouts/common/BottomBar/buttons/types.ts";

function AssetIcon({ selected }: ButtonIcon) {
  if (selected) return <img src={asset_primary} alt="asset_primary" />;

  return <img src={asset_secondary} alt="asset_secondary" />;
}

export default AssetIcon;
