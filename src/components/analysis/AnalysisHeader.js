import { Typography } from '@mui/material';
import moment from 'moment';
import SwitchingHeader from '../common/SwitchingHeader';

function AnalysisHeader() {
  const today = moment(new Date()).format('YYYY년 M월');
  return (
    <SwitchingHeader>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>카테고리별 소비 현황</Typography>
      <Typography variant="caption">{`${today} 기준`}</Typography>
    </SwitchingHeader>
  );
}

export default AnalysisHeader;
