import {
  Box, Paper, Stack, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectHeaderOpen } from '../../utils/redux/common/commonSlice';

function TopBar() {
  const headerOpen = useSelector(selectHeaderOpen);
  return (
    <Paper>
      {
        headerOpen
        && (
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
        )
      }

    </Paper>
  );
}
export default TopBar;
/**
 * 상단 바
 */
