import {
  Box, IconButton, Stack,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import RoundedPaper from '../../../../../components/common/RoundedPaper';
import ModalStaticBackdrop from '../../../../../components/layouts/ModalStaticBackdrop';
import RoundedBorderBox from '../../../../../components/common/RoundedBorderBox';
import { selectSavingGoal } from '../../../../../app/redux/slices/assetSlice';
import InputModal from './InputModal';
import AlertModal from '../../../../../components/common/AlertModal';
import useModal from '../../../../../hooks/useModal';

function Saving() {
  const {
    modalOpen: savingGoalModalOpen,
    openModal: openSavingGoalModal,
    closeModal: closeSavingGoalModal
  } = useModal();

  const [openAlertModal, setOpenAlertModal] = useState(false);
  const saving = useSelector(selectSavingGoal);

  const foo = () => {
    setOpenAlertModal(false);
    openSavingGoalModal();
  };

  return (
    <>
      <RoundedPaper my={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" pb={1}>
          <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>1 Year Goal</Box>
          <IconButton color="primary" onClick={() => setOpenAlertModal(true)} sx={{ p: 0 }}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
        <RoundedBorderBox>
          <Box sx={{
            typography: 'h6', fontWeight: 'bold', color: 'primary.main', textAlign: 'end', p: 2,
          }}
          >
            {parseInt(saving.year, 10).toLocaleString('ko-KR')}
            원
          </Box>
        </RoundedBorderBox>
        <Stack direction="row" justifyContent="space-between" alignItems="center" pb={1} pt={2}>
          <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>1 Month Goal</Box>
          {/* <IconButton color="primary" onClick={() => setOpenAlertModal(true)}>
            <BorderColorIcon fontSize="small" />
          </IconButton> */}
        </Stack>
        <RoundedBorderBox>
          <Box sx={{
            typography: 'h6', fontWeight: 'bold', color: 'primary.main', textAlign: 'end', p: 2,
          }}
          >
            {parseInt(saving.month, 10).toLocaleString('ko-KR')}
            원
          </Box>
        </RoundedBorderBox>
      </RoundedPaper>

      <ModalStaticBackdrop
        keepMounted
        width="xs"
        open={savingGoalModalOpen}
        component={(
          <InputModal closeSavingGoalModal={closeSavingGoalModal} />
        )}
      />

      <AlertModal
        open={openAlertModal}
        handleClose={() => setOpenAlertModal(false)}
        handleClickYes={() => foo()}
        mode="modify"
      />
    </>

  );
}

export default Saving;
