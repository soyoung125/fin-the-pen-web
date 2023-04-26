/* eslint-disable no-mixed-operators */
import { Box, LinearProgress, Stack } from '@mui/material';
import RoundedPaper from '../../common/RoundedPaper';
import { Schedule } from '../../../types/schedule';

interface AssetManagementProps {
  selectedItem: Schedule[],
  spending: number,
  bgColor: string,
  type: string,
  asset: number,
  balance: number,
}

function AssetManagement({
  selectedItem, spending, bgColor, type, asset, balance,
}: AssetManagementProps) {
  return (
    <RoundedPaper my={2}>
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ fontSize: '17px', fontWeight: 'bolder' }}>{`${type}/${selectedItem[0].category} 예산`}</Box>
        <Box>
          {`${balance.toLocaleString('ko-KR')}원 `}
          {balance > 0 ? '남음' : '초과'}
        </Box>
      </Stack>

      <LinearProgress
        variant="determinate"
        value={balance > 0 ? (spending / asset * 100) : 100}
        sx={{
          height: '10px',
          borderRadius: '10px',
          backgroundColor: 'rgba(216, 216, 216, 0.62)',
          my: 1,
          '.MuiLinearProgress-bar1Determinate': {
            borderRadius: '10px',
            backgroundColor: bgColor,
          },
        }}
      />

      <Stack direction="row" justifyContent="space-between">
        <Box>{`${spending.toLocaleString('ko-KR')}원 지출`}</Box>
        <Box sx={{ color: '#979797' }}>{`예산 ${asset.toLocaleString('ko-KR')}원`}</Box>
      </Stack>
    </RoundedPaper>
  );
}

export default AssetManagement;
