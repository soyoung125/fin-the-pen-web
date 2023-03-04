/* eslint-disable no-unused-vars */
import {
  Box, Button, Divider, FormControl, Grid, IconButton, InputAdornment,
  OutlinedInput, Stack, Switch, TextField, Typography,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector } from 'react-redux';
import ModalStaticBackdrop from '../../../../../../components/layouts/ModalStaticBackdrop';
import RoundedBorderBox from '../../../../../../components/common/RoundedBorderBox';
import { SOMETHING_IS_WRONG } from '../../../../../../utils/constants/common';
import InputModal from './InputModal';
import { selectPersonalGoal } from '../../../../../../utils/redux/asset/assetSlice';
import AlertModal from '../../../../../../components/common/AlertModal';

function Personal() {
  const [personalGoalModalOpen, setPersonalGoalModalOpen] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const personal = useSelector(selectPersonalGoal);

  const openPersonalGoalModal = () => {
    setOpenAlertModal(false);
    setPersonalGoalModalOpen(true);
  };
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ fontWeight: 'bold' }}>
          당신의 또 다른 목표는 무엇인가요?
        </Box>
        <IconButton color="primary" onClick={() => setOpenAlertModal(true)}>
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
              {personal.money}
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
        open={openAlertModal}
        handleClose={() => setOpenAlertModal(false)}
        handleClickYes={() => openPersonalGoalModal()}
        mode="modify"
      />
    </>
  );
}

export default Personal;
