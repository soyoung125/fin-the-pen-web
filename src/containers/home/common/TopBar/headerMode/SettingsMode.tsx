import { Stack, Box } from '@mui/material';
import BackButton from '../buttons/BackButton';
import { useRecoilValue } from 'recoil';
import { headerTitleState } from '@app/recoil/header';

function SettingsMode() {
  const title = useRecoilValue(headerTitleState);
  return (
    <>
      {/* 헤더 좌측 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <BackButton />
        <Box>{title}</Box>
      </Stack>

      {/* 헤더 중앙 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      />

      {/* 헤더 우측 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      />
    </>
  );
}

export default SettingsMode;
