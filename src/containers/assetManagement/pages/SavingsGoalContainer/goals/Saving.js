import {
  Box, IconButton, Stack, Typography,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useState } from 'react';
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
          <Typography>
            저축 목표
          </Typography>
          )}
      />
    </>

  );
}
export default Saving;
