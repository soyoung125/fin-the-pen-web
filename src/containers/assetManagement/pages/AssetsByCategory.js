import {
  Box, IconButton, Stack,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import moment from 'moment';
import RoundedPaper from '../../../components/common/RoundedPaper';

function AssetsByCategory() {
  const today = moment();
  return (
    <>
      <RoundedPaper>
        <Box sx={{ fontWeight: 'bold' }}>{`${today.format('M월')} Goal`}</Box>
        <Box sx={{
          typography: 'h4', fontWeight: 'bold', color: 'primary.main', marginTop: 1,
        }}
        >
          xxxxxxx원
          <IconButton color="primary" onClick={() => console.log('modify')} sx={{ p: 0 }}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Box>
        <Stack direction="row" justifyContent="space-between">
          <Box>지난 달 지출</Box>
          <Box>xxxxxxx원</Box>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Box>최근 3개월 평균 지출</Box>
          <Box>xxxxxxx원</Box>
        </Stack>
      </RoundedPaper>
      카테고리별 자산 설정
    </>
  );
}

export default AssetsByCategory;
