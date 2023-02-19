import {
  Box, Stack,
} from '@mui/material';
import 'swiper/css';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import RoundedBorderBox from '../../../../common/RoundedBorderBox';
import PATH from '../../../../../utils/constants/path';

function DetailCard({ data }) {
  const navigate = useNavigate();
  // console.log(data);
  return (
    <Box mb={1}>
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
            <Box
              sx={{ mb: 1 }}
              onClick={() => navigate(PATH.DetailInfomation)}
            >
              {data.event_name}
            </Box>
            <Box sx={{ color: 'primary.main' }}>{`${parseInt(data.expected_spending, 10).toLocaleString('ko-kr')}원`}</Box>
          </Box>
        </Stack>
      </RoundedBorderBox>
    </Box>
  );
}

export default DetailCard;
