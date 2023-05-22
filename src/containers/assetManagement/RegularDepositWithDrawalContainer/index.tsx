/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  Box, Button, IconButton, Stack,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from '../../../domain/constants/schedule';
import DetailCard from './DetailCard';
import Title from '../../../components/common/Title';
import PATH from '../../../domain/constants/path';
import AlertModal from '../../../components/common/AlertModal';
import { selectBottomDrawerOpen } from '../../../app/redux/slices/commonSlice';
import ArrowTooltip from '../../../components/common/ArrowTooltip';
import { Schedule } from '../../../types/schedule';
import { makeGroupForRegularData } from '../../../domain/tools';
import useSchedule from '../../../hooks/useSchedule';

interface DataInterface {
  [prop: string]: Schedule[],
}

// interface MakeGroupInterface {
//   (data: Schedule[]): DataInterface,
// }

function RegularDepositWithdrawal() {
  const navigate = useNavigate();
  const bottomDrawerOpen = useSelector(selectBottomDrawerOpen);
  const { schedules } = useSchedule();
  const [deposits, setDeposits] = useState<DataInterface>({});
  const [withdrawals, setWithdrawals] = useState<DataInterface>({});
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [type, setType] = useState('+');

  useEffect(() => {
    setDeposits(makeGroupForRegularData(schedules.filter((s) => s.repeating_cycle !== '없음' && s.type === '+')));
    setWithdrawals(makeGroupForRegularData(schedules.filter((s) => s.repeating_cycle !== '없음' && s.type === '-')));
  }, [schedules]);

  // const makeGroup: MakeGroupInterface = (data) => data
  //   .reduce((acc: DataInterface, curr: Schedule) => {
  //     const { event_name } = curr;
  //     if (acc[event_name]) acc[event_name].push(curr);
  //     else acc[event_name] = [curr];
  //     return acc;
  //   }, {});

  const hadleOpenAlertModal = (newType: string): void => {
    setType(newType);
    setOpenAlertModal(true);
  };

  const handleMoveToDetailPage = () => {
    if (type === '+') {
      navigate(PATH.DetailSetting, { state: { type: '+', data: deposits } });
    } else if (type === '-') {
      navigate(PATH.DetailSetting, { state: { type: '-', data: withdrawals } });
    }
  };

  return (
    <>
      <Title
        type="+"
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE['+']} 내역`}
      >
        <Stack direction="row" alignItems="center" sx={{ color: 'primary.main' }}>
          <Box>{`총 ${Object.keys(deposits).length}건`}</Box>
          <IconButton color="primary" onClick={() => hadleOpenAlertModal('+')}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Title>

      {Object.keys(deposits).map((d) => <DetailCard data={deposits[d]} key={deposits[d][0].id} />)}

      <Title
        type="-"
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE['-']} 내역`}
      >
        <Stack direction="row" alignItems="center" sx={{ color: 'primary.main' }}>
          <Box>{`총 ${Object.keys(withdrawals).length}건`}</Box>
          <IconButton color="primary" onClick={() => hadleOpenAlertModal('-')}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Title>

      {Object.keys(withdrawals)
        .map((w) => <DetailCard data={withdrawals[w]} key={withdrawals[w][0].id} />)}

      <AlertModal
        open={openAlertModal}
        handleClose={() => setOpenAlertModal(false)}
        handleClickYes={() => handleMoveToDetailPage()}
        mode="modify"
      />

      <Box
        sx={{
          width: '100vw',
          pr: 4,
          position: 'fixed',
          bottom: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ArrowTooltip open={!bottomDrawerOpen} title="정기 입출금 일정 추가하기">
          <Button />
        </ArrowTooltip>
      </Box>
    </>
  );
}

export default RegularDepositWithdrawal;
