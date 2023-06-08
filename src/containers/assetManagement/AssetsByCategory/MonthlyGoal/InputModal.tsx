import {
  Box, Button, Divider, IconButton, Stack, TextField, Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { selectMonthlyConsumptionGoal, setMonthlyConsumptionGoal } from '../../../../app/redux/slices/assetSlice';
import AlertModal from '../../../../components/common/AlertModal';

interface InputModalProps {
  setMonthlyGoalModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function InputModal({
  setMonthlyGoalModalOpen,
}: InputModalProps) {
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const month = moment().format('M월');
  const [goal, setGoal] = useState(0);

  /**
   * redux에 이미 저장된 목표 값 불러오기
   */
  const dispatch = useDispatch();
  const saving = useSelector(selectMonthlyConsumptionGoal);
  useEffect(() => {
    setGoal(saving);
  }, [saving]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replaceAll(',', '');
    if (+value >= 0) {
      console.log(value);
      setGoal(parseInt(value, 10));
    } else {
      alert('숫자는 0 이하일 수 없습니다.');
    }
  };

  return (
    <>
      <Stack p={2} spacing={1}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <IconButton
            onClick={() => setOpenAlertModal(true)}
            color="error"
          >
            <DeleteForeverIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{`${month} 지출 목표 설정`}</Typography>
          <IconButton onClick={() => setMonthlyGoalModalOpen(false)}>
            <ClearIcon />
          </IconButton>
        </Stack>
        <Box my={1}>
          <Divider />
        </Box>
        <Stack spacing={1}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{`${month} 지출 목표 금액`}</Typography>
          <TextField
            fullWidth
            placeholder="이달의 소비 목표액을 입력하세요"
            type="text"
            value={goal.toLocaleString('ko-KR')}
            onFocus={(e) => e.target.select()}
            onChange={handleChange}
            id="monthlyGoal" />
        </Stack>
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            dispatch(setMonthlyConsumptionGoal(goal));
            setMonthlyGoalModalOpen(false);
          } }
        >
          한해 저축 목표 설정하기
        </Button>
      </Stack>
      <AlertModal
        open={openAlertModal}
        handleClose={() => setOpenAlertModal(false)}
        handleClickYes={() => {
          setOpenAlertModal(false);
          setGoal(0)
        } }
        mode="reset"
      />
    </>
  );
}

export default InputModal;
