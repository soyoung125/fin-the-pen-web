import {
  Box,
  Paper, Stack, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectHeaderOpen } from '../../utils/redux/common/commonSlice';

function TopBar() {
  const headerOpen = useSelector(selectHeaderOpen);
  return (
    <Box>
      {
        headerOpen
        && (
          <Paper
            elevation={10}
            sx={{
              backgroundColor: '#7c4dff',
              height: 100,
              borderBottomLeftRadius: '30px',
              borderBottomRightRadius: '30px',
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="stretch"
              mx={1}
              sx={{ height: 100 }}
            >
              <Stack
                justifyContent="flex-start"
                alignItems="center"
                mt={1}
              >
                <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
                  좌측
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'white' }}>
                  표시영역
                </Typography>
              </Stack>
              <Stack
                justifyContent="flex-end"
                alignItems="center"
                mb={1}
              >
                <Typography sx={{ fontWeight: 'bolder' }}>
                  중앙
                </Typography>
                <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
                  표시영역
                </Typography>
              </Stack>
              <Stack
                justifyContent="flex-start"
                alignItems="center"
                mt={1}
              >
                <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
                  우측
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'white' }}>
                  표시영역
                </Typography>
              </Stack>

            </Stack>
          </Paper>
        )
      }
    </Box>
  );
}
export default TopBar;
/**
 * 상단 바
 */
