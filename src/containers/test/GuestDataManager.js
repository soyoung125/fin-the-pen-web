import {
  Box, Button, Divider, Stack, Typography,
} from '@mui/material';
import { useState } from 'react';
import ModalStaticBackdrop from '../../components/layouts/ModalStaticBackdrop';

function GuestDataManager() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const saveData = () => {
    setOpen(true);
    setText('dd');
    alert('준비 중인 메뉴');
  };
  return (
    <Stack spacing={2} m={2} border={1} p={2}>
      <Typography variant="h5">게스트 계정 전용 메뉴 (준비중)</Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => alert('준비 중인 메뉴')}
      >
        세이브 데이터 복구하기
      </Button>

      <Button
        variant="contained"
        color="info"
        onClick={() => saveData()}
      >
        지금까지 작업한 데이터 백업
      </Button>
      <ModalStaticBackdrop
        keepMounted
        width="xl"
        open={open}
        component={(
          <Box p={3}>
            <Typography variant="h5">아래 텍스트를 복사하여 다른 곳에 저장해주세요.</Typography>

            <Box my={3}>
              <Divider />
            </Box>

            <Typography>{text}</Typography>

            <Box my={3}>
              <Divider />
            </Box>

            <Button fullWidth variant="contained" onClick={() => setOpen(false)}>닫기</Button>
          </Box>
                )}
      />
    </Stack>
  );
}
export default GuestDataManager;
