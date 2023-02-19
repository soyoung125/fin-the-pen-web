/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  Box, Button, IconButton, Stack, Tooltip,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from '../../../../utils/constants/schedule';
import DetailCard from '../../../../components/assetManagement/pages/regularDepositWithdrawal/regular/DetailCard';
import Title from '../../../../components/assetManagement/pages/regularDepositWithdrawal/regular/Title';
import PATH from '../../../../utils/constants/path';
import { selectSchedules } from '../../../../utils/redux/schedule/scheduleSlice';
import AlertModal from '../../../../components/common/AlertModal';
import { selectBottomDrawerOpen } from '../../../../utils/redux/common/commonSlice';

function RegularDepositWithdrawal() {
  const navigate = useNavigate();
  const bottomDrawerOpen = useSelector(selectBottomDrawerOpen);
  const schedules = useSelector(selectSchedules);
  const [deposits, setDeposits] = useState([]);
  const [depositsGroup, setDepositsGroup] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);
  const [withdrawalsGroup, setWithdrawalsGroup] = useState([]);
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [type, setType] = useState('+');

  useEffect(() => {
    setDeposits(schedules.filter((s) => s.repeating_cycle !== '없음' && s.type === '+'));
    setWithdrawals(schedules.filter((s) => s.repeating_cycle !== '없음' && s.type === '-'));
  }, [schedules]);

  useEffect(() => {
    setDepositsGroup(makeGroup(deposits));
    setWithdrawalsGroup(makeGroup(withdrawals));
  }, [deposits, withdrawals]);

  const makeGroup = (data) => data.reduce((acc, curr) => {
    const { event_name } = curr;
    if (acc[event_name]) acc[event_name].push(curr);
    else acc[event_name] = [curr];
    return acc;
  }, {});

  const hadleOpenAlertModal = (newType) => {
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
          <Box>{`총 ${Object.keys(depositsGroup).length}건`}</Box>
          <IconButton color="primary" onClick={() => hadleOpenAlertModal('+')}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Title>

      {Object.keys(depositsGroup).map((d) => <DetailCard data={depositsGroup[d][0]} key={depositsGroup[d][0].id} />)}

      <Title
        type="-"
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE['-']} 내역`}
      >
        <Stack direction="row" alignItems="center" sx={{ color: 'primary.main' }}>
          <Box>{`총 ${Object.keys(withdrawalsGroup).length}건`}</Box>
          <IconButton color="primary" onClick={() => hadleOpenAlertModal('-')}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Title>

      {Object.keys(withdrawalsGroup).map((w) => <DetailCard data={withdrawalsGroup[w][0]} key={withdrawalsGroup[w][0].id} />)}

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
        <Tooltip
          open={!bottomDrawerOpen}
          arrow
          placement="top"
          title="정기 입출금 일정 추가하기"
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: 'primary.main',
              },
            },
            arrow: {
              sx: {
                '&::before': {
                  backgroundColor: 'primary.main',
                },
              },
            },
          }}
        >
          <Button />
        </Tooltip>
      </Box>
    </>
  );
}

export default RegularDepositWithdrawal;
