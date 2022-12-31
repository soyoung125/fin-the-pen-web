import { Paper } from '@mui/material';

function TopBar() {
  return (
    <Paper
      sx={{
        position: 'fixed', top: 0, left: 0, right: 0,
      }}
      elevation={3}
    >
      상태바가 올 자리
    </Paper>
  );
}
export default TopBar;
/**
 * 상단 바
 */
