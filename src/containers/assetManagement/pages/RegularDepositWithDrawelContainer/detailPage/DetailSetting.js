import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from '../../../../../utils/constants/schedule';
import Title from '../../../../../components/assetManagement/pages/regularDepositWithdrawal/regular/Title';
import SwipeableDetailCard from '../../../../../components/assetManagement/pages/regularDepositWithdrawal/regular/SwipeableDetailCard';
import { selectSchedules } from '../../../../../utils/redux/schedule/scheduleSlice';

function DetailSetting() {
  const schedules = useSelector(selectSchedules);
  const { state } = useLocation();
  const { type, data } = state;
  const [detailData, setDetailData] = useState(data);

  useEffect(() => {
    setDetailData(schedules.filter((s) => s.repeating_cycle !== '없음' && s.type === type));
  }, [schedules]);

  return (
    <>
      <Title
        type={state.type}
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE[type]} 내역`}
      >
        <Box sx={{ color: 'primary.main' }}>{`총 ${detailData.length}건`}</Box>
      </Title>

      {detailData.map((d) => <SwipeableDetailCard data={d} key={d.id} />)}
    </>
  );
}

export default DetailSetting;
