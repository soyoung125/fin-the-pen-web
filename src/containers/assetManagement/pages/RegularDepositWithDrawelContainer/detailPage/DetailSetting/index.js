/* eslint-disable @typescript-eslint/naming-convention */
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from '../../../../../../domain/constants/schedule';
import Title from '../../../../../../components/common/Title';
import { selectSchedules } from '../../../../../../domain/redux/schedule/scheduleSlice';
import SwipeableDetailCard from './SwipeableDetailCard';

function DetailSetting() {
  const schedules = useSelector(selectSchedules);
  const { state } = useLocation();
  const { type, data } = state;
  const [detailData, setDetailData] = useState(data);

  useEffect(() => {
    setDetailData(schedules.filter((s) => s.repeating_cycle !== '없음' && s.type === type).reduce((acc, curr) => {
      const { event_name } = curr;
      if (acc[event_name]) acc[event_name].push(curr);
      else acc[event_name] = [curr];
      return acc;
    }, {}));
  }, [schedules]);

  return (
    <>
      <Title
        type={state.type}
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE[type]} 내역`}
      >
        <Box sx={{ color: 'primary.main' }}>{`총 ${Object.keys(detailData).length}건`}</Box>
      </Title>

      {Object.keys(detailData).map((d) => (
        <SwipeableDetailCard
          data={detailData[d]}
          key={detailData[d][0].id}
        />
      ))}
    </>
  );
}

export default DetailSetting;
