import { Stack } from "@mui/material";
import assetManagements, {
  AssetManagement,
} from "../../../constants/managements.ts";
import SettingCard from "./SettingCard";

function SettingsPaper() {
  return (
    <Stack>
      {assetManagements.map((s: AssetManagement) => (
        <SettingCard setting={s} key={s.path} />
      ))}
    </Stack>
  );
}

export default SettingsPaper;
