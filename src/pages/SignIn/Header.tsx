import { Stack, Typography } from "@mui/material";
import LogoCircle from "@components/common/LogoCircle.tsx";

function Header() {
  return (
    <Stack py={3} alignItems="center" spacing={2}>
      <LogoCircle />
      <Stack my={2}>
        <Typography
          fontSize={22}
          fontWeight={700}
          textAlign="center"
          whiteSpace="pre-line"
        >
          {`핀더펜과 함께\n자산설계를 시작하세요!`}
        </Typography>
      </Stack>
    </Stack>
  );
}
export default Header;
