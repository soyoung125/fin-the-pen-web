import { Stack, Typography } from '@mui/material';
import LogoCircle from '../../../components/common/LogoCircle';

function Header() {
  return (
    <>
      <LogoCircle />
      <Stack my={2}>
        <Typography component="h1" variant="h5">
          핀더펜과 함께 자산설계를 시작하세요!
        </Typography>
      </Stack>
    </>
  );
}
export default Header;
