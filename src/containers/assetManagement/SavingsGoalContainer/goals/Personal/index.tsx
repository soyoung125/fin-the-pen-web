import {
  Box, Grid, IconButton, Stack,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalStaticBackdrop from '../../../../../components/layouts/ModalStaticBackdrop';
import RoundedBorderBox from '../../../../../components/common/RoundedBorderBox';
import InputModal from './InputModal';
import { selectPersonalGoal } from '../../../../../app/redux/slices/assetSlice';
import AlertModal from '../../../../../components/common/AlertModal';
import useModal from '../../../../../hooks/useModal';

function Personal() {
  const [personalGoalModalOpen, setPersonalGoalModalOpen] = useState(false);
  const { modalOpen, openModal, closeModal } = useModal();
  const personal = useSelector(selectPersonalGoal);

  const openPersonalGoalModal = () => {
    closeModal();
    setPersonalGoalModalOpen(true);
  };
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ fontWeight: 'bold' }}>
          당신의 또 다른 목표는 무엇인가요?
        </Box>
        <IconButton color="primary" onClick={() => openModal()}>
          <BorderColorIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Grid container spacing={1} textAlign="center" mt={0}>
        <Grid item xs={6}>
          <Stack
            justifyContent="space-around"
            sx={{
              borderRadius: 2, backgroundColor: 'primary.main', color: 'white', p: 2, height: '100%',
            }}
          >
            <Box mb={2}>나의 목표</Box>
            <Box>{personal.name}</Box>
            <Box>
              {personal.money.toLocaleString('ko-KR')}
              원
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <RoundedBorderBox>
            <Stack
              direction="row"
              justifyContent="space-between"
              p={2}
            >
              <Box>기간</Box>
              <Box sx={{ color: 'primary.main' }}>{personal.deadline}</Box>
            </Stack>
          </RoundedBorderBox>

          <Box my={1} />

          <RoundedBorderBox>
            <Box p={2}>
              <Box mb={1}>핀더펜 MONEY</Box>
              <Box sx={{ color: 'primary.main' }}>xxxxxxx원</Box>
            </Box>
          </RoundedBorderBox>
        </Grid>
      </Grid>

      <ModalStaticBackdrop
        keepMounted
        width="xs"
        open={personalGoalModalOpen}
        component={(
          <InputModal setPersonalGoalModalOpen={setPersonalGoalModalOpen} />
        )}
      />

      <AlertModal
        open={modalOpen}
        handleClose={() => closeModal()}
        handleClickYes={() => openPersonalGoalModal()}
        mode="modify"
      />
    </>
  );
}

export default Personal;
