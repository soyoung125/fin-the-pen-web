import { Box, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoCircle from '../../components/common/LogoCircle';
import CenterBox from '../../components/layouts/CenterBox';

function EasyAuthentication() {
  const navigate = useNavigate();
  return (
    <CenterBox>
      <Stack
        justifyContent="center"
        alignItems="center"
        px={1}
      >
        <LogoCircle />

        <Box my={2} sx={{ typography: 'h5', fontWeight: 'bold' }}>비밀번호 입력</Box>

        <Box sx={{ fontWeight: 'bold', fontSize: '17px', color: 'primary.main' }}>설정하신 PIN 6자리를 입력해주세요.</Box>

        <Button fullWidth variant="contained" onClick={() => navigate(-1)}>인증</Button>
      </Stack>
    </CenterBox>
  );
}

export default EasyAuthentication;
