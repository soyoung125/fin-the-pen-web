import { Box, LinearProgress, Stack } from '@mui/material';
import RoundedPapaer from '../../common/RoundedPaper';

function AssetManagement({ selectedItem, spending, bgColor }) {
  console.log(selectedItem);
  return (
    <RoundedPapaer>
      <Stack direction="row" justifyContent="space-between">
        <Box>{selectedItem[0].category}</Box>
        <Box>xxxxx원 남음</Box>
      </Stack>

      <LinearProgress
        variant="determinate"
        value={50}
        sx={{
          height: '10px',
          borderRadius: '10px',
          backgroundColor: 'rgba(216, 216, 216, 0.62)',
          '.MuiLinearProgress-bar1Determinate': {
            borderRadius: '10px',
            backgroundColor: bgColor,
          },
        }}
      />

      <Stack direction="row" justifyContent="space-between">
        <Box>{`${spending}월 지출`}</Box>
        <Box>예산 xxxxxxx원</Box>
      </Stack>
    </RoundedPapaer>
  );
}

export default AssetManagement;
