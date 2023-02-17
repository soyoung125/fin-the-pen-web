/* eslint-disable no-unused-vars */
import {
  Box, Button, Divider, IconButton, Stack, TextField, Typography,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import RoundedPaper from '../../../../../components/common/RoundedPaper';
import ModalStaticBackdrop from '../../../../../components/layouts/ModalStaticBackdrop';
import RoundedBorderBox from '../../../../../components/common/RoundedBorderBox';
import { selectSavingGoal, setSavingGoal } from '../../../../../utils/redux/asset/assetSlice';

function Saving() {
  const [savingGoalModalOpen, setSavingGoalModalOpen] = useState(false);
  const [form, setForm] = useState({
    year: 0,
    month: 0,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (value >= 0) {
      setForm({
        year: id === 'year' ? value : value * 12,
        month: id === 'year' ? Math.round(value / 12) : value,
      });
    } else {
      alert('숫자는 0 이하일 수 없습니다.');
    }
  };

  /**
   * redux에 이미 저장된 목표 값 불러오기
   */
  const dispatch = useDispatch();
  const saving = useSelector(selectSavingGoal);
  useEffect(() => {
    setForm(saving);
  }, [saving]);

  return (
    <>
      <RoundedPaper sx={{ p: 2, mt: 1, mb: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>1 Year Goal</Box>
          <IconButton color="primary" onClick={() => setSavingGoalModalOpen(true)}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
        <RoundedBorderBox>
          <Box sx={{
            typography: 'h6', fontWeight: 'bold', color: 'primary.main', textAlign: 'end', p: 2,
          }}
          >
            {saving.year}
            원
          </Box>
        </RoundedBorderBox>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>1 Month Goal</Box>
          <IconButton color="primary" onClick={() => setSavingGoalModalOpen(true)}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
        <RoundedBorderBox>
          <Box sx={{
            typography: 'h6', fontWeight: 'bold', color: 'primary.main', textAlign: 'end', p: 2,
          }}
          >
            {saving.month}
            원
          </Box>
        </RoundedBorderBox>
      </RoundedPaper>

      {/* 모달은 반드시 분리가 필요한 부분 */}
      <ModalStaticBackdrop
        keepMounted
        width="xs"
        open={savingGoalModalOpen}
        component={(
          <Stack p={2} spacing={1}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <IconButton onClick={() => setSavingGoalModalOpen(false)}>
                <ClearIcon />
              </IconButton>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>저축 목표 설정</Typography>
              <IconButton
                onClick={() => setForm({
                  year: 0,
                  month: 0,
                })}
                color="error"
              >
                <DeleteForeverIcon />
              </IconButton>
            </Stack>
            <Box my={1}>
              <Divider />
            </Box>
            <Stack spacing={1}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>1 Year Goal</Typography>
              <TextField
                fullWidth
                placeholder="한해동안의 저축 목표액을 입력하세요"
                type="number"
                value={form.year}
                onChange={handleChange}
                id="year"
              />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>1 Month Goal</Typography>
              <TextField
                fullWidth
                placeholder="한해 저축 목표액을 입력하면 한달 저축 목표금액이 표시됩니다. "
                type="number"
                value={form.month}
                onChange={handleChange}
                id="month"
              />
            </Stack>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                dispatch(setSavingGoal(form));
                setSavingGoalModalOpen(false);
              }}
            >
              한해 저축 목표 설정하기
            </Button>
          </Stack>
        )}
      />
    </>

  );
}
export default Saving;
