import setting_primary from "@assets/icons/bottom/setting_primary.svg";
import setting_secondary from "@assets/icons/bottom/setting_secondary.svg";
import { ButtonIcon } from "@components/layouts/common/BottomBar/buttons/types.ts";

function SettingIcon({ selected }: ButtonIcon) {
  if (selected) return <img src={setting_primary} alt="setting_primary" />;

  return <img src={setting_secondary} alt="setting_secondary" />;
}

export default SettingIcon;
