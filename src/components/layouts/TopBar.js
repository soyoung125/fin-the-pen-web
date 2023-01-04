import {
  Paper, Stack, Typography,
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
          <Stack
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography>
              좌측
            </Typography>
            <Typography>
              표시영역
            </Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
          >
            <Typography>
              중앙
            </Typography>
            <Typography>
              표시영역
            </Typography>
          </Stack>
          <Stack
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Typography>
              우측
            </Typography>
            <Typography>
              표시영역
            </Typography>
          </Stack>

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
