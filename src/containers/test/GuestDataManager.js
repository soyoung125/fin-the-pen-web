import {
  Button, Stack, Typography,
} from '@mui/material';
import DataBackUpButton from '../../components/test/DataBackUpButton';

function GuestDataManager() {
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
      <DataBackUpButton />

    </Stack>
  );
}
export default GuestDataManager;
