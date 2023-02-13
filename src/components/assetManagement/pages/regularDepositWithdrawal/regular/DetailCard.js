import {
  Box, Stack,
} from '@mui/material';
import 'swiper/css';
import moment from 'moment';
import RoundedBorderBox from '../../../../common/RoundedBorderBox';

function DetailCard({ data }) {
  return (
    <Box>
      <RoundedBorderBox>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            p: 2,
          }}
        >
          <Box>
            <Box sx={{ mb: 1 }}>{`매${data.repeating_cycle.charAt(0)} ${moment(data.date).format('D일')}`}</Box>
            <Box>{data.event_name}</Box>
          </Box>
          <Box sx={{ textAlign: 'end' }}>
            <Box sx={{ mb: 1 }}>{data.event_name}</Box>
            <Box sx={{ color: 'primary.main' }}>{`${parseInt(data.expected_spending, 10).toLocaleString('ko-kr')}원`}</Box>
          </Box>
        </Stack>
      </RoundedBorderBox>
    </Box>
  );
}

export default DetailCard;
