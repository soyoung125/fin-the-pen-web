import { Stack } from '@mui/material';
import LogoButton from '../buttons/LogoButton';
import PersonalButton from '../buttons/PersonalButton';
import BackButton from '../buttons/BackButton';

function SignMode() {
  return (
    <>
      {/* 헤더 좌측 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <BackButton />
      </Stack>

      {/* 헤더 중앙 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
      </Stack>

      {/* 헤더 우측 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
      </Stack>
    </>
  );
}

export default SignMode;
