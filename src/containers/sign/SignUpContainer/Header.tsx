import { Stack, Typography } from '@mui/material';
import LogoCircle from '../../../components/common/LogoCircle';

function Header() {
  return (
    <>
      <LogoCircle />
      <Stack my={2}>
        <Typography component="h1" variant="h5">
          계정 만들기
        </Typography>
      </Stack>
    </>
  );
}

export default Header;
