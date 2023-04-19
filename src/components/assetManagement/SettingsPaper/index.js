import { Stack } from '@mui/material';
import assetManagements from '../../../domain/constants/managements';
import SettingCard from './SettingCard';

function SettingsPaper() {
  return (
    <Stack>
      {assetManagements.map((s) => (
        <SettingCard setting={s} key={s.path} />
      ))}
    </Stack>
  );
}

export default SettingsPaper;
