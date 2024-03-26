import { Box, Stack } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RoundedPaper from "../../common/RoundedPaper";
import { AssetManagement } from "@constants/managements.ts";
import useAsset from "@hooks/assetManagement/useAsset.ts";

interface SettingCardProps {
  setting: AssetManagement;
  index: number;
}

function SettingCard({ setting, index }: SettingCardProps) {
  const { setMenu } = useAsset();

  return (
    <RoundedPaper my={1}>
      <Box onClick={() => setMenu(index)}>
        <Stack direction="row" justifyContent="space-between">
          <Box sx={{ fontWeight: "bold" }}>{setting.title}</Box>
          <KeyboardArrowRightIcon />
        </Stack>
      </Box>
    </RoundedPaper>
  );
}

export default SettingCard;
