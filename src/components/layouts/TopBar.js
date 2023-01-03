import {
  Box, Paper, Stack, Typography,
} from '@mui/material';

function TopBar() {
  return (
    <Paper
      sx={{
        position: 'fixed', top: 0, left: 0, right: 0,
      }}
      elevation={3}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        mx={1}
      >
        <Box>
          <Typography>
            2023
          </Typography>
          <Typography>
            January
          </Typography>
        </Box>
        <Box>
          <Typography>
            1월 소비 목표 금액
          </Typography>
          <Typography>
            600,000원
          </Typography>
        </Box>
        <Box>
          <Typography>
            1월 1일
          </Typography>
          <Typography>
            일요일
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
export default TopBar;
/**
 * 상단 바
 */
