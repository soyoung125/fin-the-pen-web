import {
  Box, Button, Divider, IconButton, Stack, TextField, Typography, FormControl, OutlinedInput, InputAdornment,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AlertModal from '../../../../../components/common/AlertModal';
import { selectSavingGoal, setSavingGoal } from '../../../../../app/redux/slices/assetSlice';
import { useAppDispatch } from '../../../../../app/redux/hooks';
import useModal from '../../../../../hooks/useModal';
import SwitchButton from '../../../../../components/common/SwitchButton';

interface InputModalProps {
  closeSavingGoalModal: () => void,
}

function InputModal({
  closeSavingGoalModal,
}: InputModalProps) {
  const {
    modalOpen: alertModalOpen,
    openModal: openAlertModal,
    closeModal: closeAlertModal
  } = useModal();
  const [form, setForm] = useState({
    year: 0,
    month: 0,
    autoSaving: true,
    popUp: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target;
    const newValue = parseInt(value.replaceAll(',', ''), 10);
    if (newValue >= 0) {
      setForm({
        ...form,
        year: id === 'year' ? newValue : newValue * 12,
        month: id === 'year' ? Math.round(newValue / 12) : newValue,
      });
    } else {
      alert('숫자는 0 이하일 수 없습니다.');
    }
  };

  const changeSavingGoal = (id: string, value: boolean): void => {
    setForm({ ...form, [id]: value });
  }

  /**
   * redux에 이미 저장된 목표 값 불러오기
   */
  const dispatch = useAppDispatch();
  const saving = useSelector(selectSavingGoal);
  useEffect(() => {
    setForm(saving);
  }, [saving]);

  return (
    <Stack p={2} spacing={1}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <IconButton
          onClick={openAlertModal}
          color="error"
        >
          <DeleteForeverIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>저축 목표 설정</Typography>
        <IconButton onClick={() => closeSavingGoalModal()}>
          <ClearIcon />
        </IconButton>
      </Stack>
      <Box my={1}>
        <Divider />
      </Box>
      <Stack spacing={1}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>1 Year Goal</Typography>
        <TextField
          fullWidth
          placeholder="한해동안의 저축 목표액을 입력하세요"
          type="text"
          value={form.year.toLocaleString('ko-KR')}
          onFocus={(e) => e.target.select()}
          onChange={handleChange}
          id="year"
          inputProps={{
            style: { textAlign: 'right' },
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>1 Month Goal</Typography>
        <TextField
          fullWidth
          placeholder="한해 저축 목표액을 입력하면 한달 저축 목표금액이 표시됩니다. "
          type="text"
          value={form.month.toLocaleString('ko-KR')}
          onFocus={(e) => e.target.select()}
          onChange={handleChange}
          id="month"
          inputProps={{
            style: { textAlign: 'right' },
          }}
        />

        {/* 적금액 송금 설정 */}
        <FormControl fullWidth>
          <OutlinedInput
            startAdornment={<InputAdornment position="start">적금액 송금 설정</InputAdornment>}
            endAdornment={(
              <SwitchButton
                checked={form.autoSaving}
                handleChange={() => changeSavingGoal('autoSaving', !form.autoSaving)}
              />
            )}
            size="small"
            readOnly
          />
        </FormControl>

        {/* 팝업창 */}
        <FormControl fullWidth>
          <OutlinedInput
            startAdornment={<InputAdornment position="start">팝업창</InputAdornment>}
            endAdornment={(
              <SwitchButton
                checked={form.popUp}
                handleChange={() => changeSavingGoal('popUp', !form.popUp)}
              />
            )}
            size="small"
            readOnly
          />
        </FormControl>
      </Stack>
      <Button
        fullWidth
        variant="contained"
        onClick={() => {
          dispatch(setSavingGoal(form));
          closeSavingGoalModal();
        }}
      >
        한해 저축 목표 설정하기
      </Button>

      <AlertModal
        open={alertModalOpen}
        handleClose={closeAlertModal}
        handleClickYes={() => {
          setForm({
            year: 0,
            month: 0,
            autoSaving: true,
            popUp: false,
          });
          closeAlertModal();
        }}
        mode="reset"
      />
    </Stack>
  );
}

export default InputModal;
