/* eslint-disable @typescript-eslint/naming-convention */
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from '../../../../../../domain/constants/schedule';
import Title from '../../../../../../components/common/Title';
import { selectSchedules } from '../../../../../../domain/redux/schedule/scheduleSlice';
import SwipeableDetailCard from './SwipeableDetailCard';
import { Schedule } from '../../../../../../types/schedule';
import { makeGroupForRegularData } from '../../../../../../domain/tools';

interface StateData {
  type: '+' | '-',
  data: Schedule[],
}

function DetailSetting() {
  const schedules = useSelector(selectSchedules);
  const { state } = useLocation();
  const { type, data }: StateData = state;
  const [detailData, setDetailData] = useState({ [data[0].event_name]: data });

  useEffect(() => {
    setDetailData(makeGroupForRegularData(schedules.filter((s) => s.repeating_cycle !== '없음' && s.type === type)));
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