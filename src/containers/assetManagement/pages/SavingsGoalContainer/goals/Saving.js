import {
  Box, Button, Divider, IconButton, Stack, TextField, Typography,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClearIcon from '@mui/icons-material/Clear';
import RoundedPaper from '../../../../../components/common/RoundedPaper';
import ModalStaticBackdrop from '../../../../../components/layouts/ModalStaticBackdrop';
import RoundedBorderBox from '../../../../../components/common/RoundedBorderBox';

function Saving() {
  const [savingGoalModalOpen, setSavingGoalModalOpen] = useState(false);
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
            typography: 'h6', fontWeight: 'bold', color: 'primary.main', textAlign: 'end',
          }}
          >
            xxxxxxx원
          </Box>
        </RoundedBorderBox>

        <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>1 Month Goal</Box>
        <RoundedBorderBox>
          <Box sx={{
            typography: 'h6', fontWeight: 'bold', color: 'primary.main', textAlign: 'end',
          }}
          >
            xxxxxxx원
          </Box>
        </RoundedBorderBox>
      </RoundedPaper>
      <ModalStaticBackdrop
        keepMounted
        width="xl"
        open={savingGoalModalOpen}
        component={(
          <Stack p={2} spacing={1}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <IconButton onClick={() => setSavingGoalModalOpen(false)}>
                <ClearIcon />
              </IconButton>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>저축 목표 설정</Typography>
              <IconButton onClick={() => setSavingGoalModalOpen(false)} color="error">
                <DeleteForeverIcon />
              </IconButton>
            </Stack>
            <Box my={1}>
              <Divider />
            </Box>
            <Stack spacing={1}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>1 year Goal</Typography>
              <TextField fullWidth placeholder="한해동안의 저축 목표액을 입력하세요" />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>1 Month Goal</Typography>
              <TextField
                fullWidth
                placeholder="한해 저축 목표액을 입력하면 한달 저축 목표금액이 표시됩니다. "
              />
            </Stack>
            <Button fullWidth variant="contained">
              한해 저축 목표 설정하기
            </Button>
          </Stack>
          )}
      />
    </>

  );
}
export default Saving;
