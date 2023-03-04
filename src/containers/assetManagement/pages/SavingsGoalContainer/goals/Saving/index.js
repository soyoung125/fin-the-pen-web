/* eslint-disable no-unused-vars */
import {
  Box, Button, Divider, IconButton, Stack, TextField, Typography,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import RoundedPaper from '../../../../../../components/common/RoundedPaper';
import ModalStaticBackdrop from '../../../../../../components/layouts/ModalStaticBackdrop';
import RoundedBorderBox from '../../../../../../components/common/RoundedBorderBox';
import { selectSavingGoal, setSavingGoal } from '../../../../../../utils/redux/asset/assetSlice';
import InputModal from './InputModal';
import AlertModal from '../../../../../../components/common/AlertModal';

function Saving() {
  const [savingGoalModalOpen, setSavingGoalModalOpen] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const saving = useSelector(selectSavingGoal);

  const openSavingGoalModal = () => {
    setOpenAlertModal(false);
    setSavingGoalModalOpen(true);
  };

  return (
    <>
      <RoundedPaper sx={{ p: 2, mt: 1, mb: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>1 Year Goal</Box>
          <IconButton color="primary" onClick={() => setOpenAlertModal(true)}>
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
          <IconButton color="primary" onClick={() => setOpenAlertModal(true)}>
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

      <ModalStaticBackdrop
        keepMounted
        width="xs"
        open={savingGoalModalOpen}
        component={(
          <InputModal setSavingGoalModalOpen={setSavingGoalModalOpen} />
        )}
      />

      <AlertModal
        open={openAlertModal}
        handleClose={() => setOpenAlertModal(false)}
        handleClickYes={() => openSavingGoalModal()}
        mode="modify"
      />
    </>

  );
}
export default Saving;
