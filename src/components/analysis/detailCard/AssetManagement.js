/* eslint-disable no-mixed-operators */
import { Box, LinearProgress, Stack } from '@mui/material';
import RoundedPapaer from '../../common/RoundedPaper';

function AssetManagement({
  selectedItem, spending, bgColor, type, asset, balance,
}) {
  console.log(parseInt(asset, 10));
  return (
    <RoundedPapaer>
      <Stack direction="row" justifyContent="space-between">
        <Box>{`${type}/${selectedItem[0].category} 예산`}</Box>
        <Box>
          {`${balance}원 `}
          {balance > 0 ? '남음' : '초과'}
        </Box>
      </Stack>

      <LinearProgress
        variant="determinate"
        value={balance > 0 ? (spending / parseInt(asset, 10) * 100) : 100}
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
        <Box>{`${spending.toLocaleString('ko-KR')}원 지출`}</Box>
        <Box>{`예산 ${asset}원`}</Box>
      </Stack>
    </RoundedPapaer>
  );
}

export default AssetManagement;
