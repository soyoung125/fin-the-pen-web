import {
  Box, Button, Grid, Stack, Typography,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { useEffect, useState } from 'react';
import Title from '../../../../components/common/Title';
import RoundedBorderBox from '../../../../components/common/RoundedBorderBox';
import { Schedule } from '../../../../types/schedule';

function DetailInformation() {
  const { state } = useLocation();
  const [data, setData] = useState(state.data);
  const [sortByDate, setSortByDate] = useState(true);
  const listDividerStyle = { borderTop: '2px solid', borderColor: 'primary.main' };

  useEffect(() => {
    if (sortByDate) {
      setData([...data.sort((a: Schedule, b: Schedule) => +new Date(a.date) - +new Date(b.date))]);
    } else {
      setData([...data
        .sort((a: Schedule, b: Schedule) => (b.expected_spending > a.expected_spending ? 1 : -1))]);
    }
  }, [sortByDate]);

  return (
    <>
      <Title
        type={null}
        title={(
          <Stack direction="row">
            <Box mr={1}>{state.data[0].event_name}</Box>
            <Box
              sx={{
                typography: 'subtitle2', color: 'primary.main', display: 'flex', mt: 'auto',
              }}
            >
              {`총${state.data.length}건`}
            </Box>
          </Stack>
        )}
      >
        <Stack direction="row">
          <Box
            sx={{ display: 'flex', my: 'auto', color: 'primary.main' }}
            onClick={() => setSortByDate(!sortByDate)}
          >
            {sortByDate ? '날짜순' : '금액순'}
          </Box>
          <ArrowDropDownRoundedIcon fontSize="large" sx={{ color: 'primary.main' }} />
        </Stack>
      </Title>

      <RoundedBorderBox>
        {data.map((schedule: Schedule, index: number) => (
          <Box p={1} sx={index !== 0 ? listDividerStyle : null} key={schedule.id}>
            <Stack direction="row" justifyContent="space-between">
              <Typography sx={{ fontWeight: 'bold' }}>{moment(schedule.date).format('MM월 DD일')}</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>{schedule.event_name}</Typography>
            </Stack>
            <Grid container>
              <Grid item xs>
                <Stack direction="row" sx={{ fontSize: 'small', display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{
                    width: '10px', height: '10px', marginRight: 0.5,
                  }}
                  />
                  <Box>{schedule.start_time}</Box>
                </Stack>
              </Grid>
              <Grid item xs={4.5} sm={3} md={2} lg={1}>
                <Stack direction="row" justifyContent="space-between">
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      borderRadius: 5, minWidth: 0, width: '20px', height: '20px',
                    }}
                  >
                    {schedule.type}
                  </Button>
                  <Box
                    sx={{ color: 'primary.main' }}
                  >
                    {`${parseInt(schedule.expected_spending, 10).toLocaleString('ko-KR')}원`}
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        ))}
      </RoundedBorderBox>
    </>
  );
}

export default DetailInformation;
