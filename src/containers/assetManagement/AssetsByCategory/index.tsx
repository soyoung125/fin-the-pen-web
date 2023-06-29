import {
  Box, Button, IconButton, Stack,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CategoryList from './CategoryList';
import {
  selectMonthlyConsumptionGoal,
  selectUpdateDate,
  setAssetsByCategory,
  setInitAssetsByCategory,
} from '../../../app/redux/slices/assetSlice';
import MonthlyGoal from './MonthlyGoal';
import AlertModal from '../../../components/common/AlertModal';
import ModalStaticBackdrop from '../../../components/layouts/ModalStaticBackdrop';
import InputModal from './MonthlyGoal/InputModal';
import RoundedPaper from '../../../components/common/RoundedPaper';
import { useAppDispatch } from '../../../app/redux/hooks';
import { AssetsByCategoryInterface } from '../../../types/common';

function AssetsByCategory() {
  const dispatch = useAppDispatch();
  const today = moment();
  const updateDate = useSelector(selectUpdateDate);
  const monthlyConsumptionGoal = useSelector(selectMonthlyConsumptionGoal);
  const [open, setOpen] = useState('');
  const [monthlyGoalModalOpen, setMonthlyGoalModalOpen] = useState(false);
  const [alertModalOpen, setAlertModalOpen] = useState<"modify" | "reset" | "delete">('delete');
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    if (today.isAfter(updateDate, 'month')) {
      dispatch(setInitAssetsByCategory());
    }
  }, []);

  useEffect(() => {
    console.log(alertModalOpen !== 'delete')
    if (showTooltip !== !(monthlyGoalModalOpen || alertModalOpen)) {
      setShowTooltip(!showTooltip);
    }
  }, [monthlyGoalModalOpen, alertModalOpen]);

  useEffect(() => {
    if (showTooltip) {
      setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
    }
  }, [showTooltip]);

  const handleClick = (type: string): void => {
    if (open === type) {
      setOpen('');
    } else {
      setOpen(type);
    }
  };

  const openMonthlyGoalModal = () => {
    setAlertModalOpen('delete');
    setMonthlyGoalModalOpen(true);
  };

  const resetAssetByCategory = () => {
    setAlertModalOpen('delete');
    dispatch(setInitAssetsByCategory());
  };

  const updateCategoryAssets = (newData: AssetsByCategoryInterface[]) => {
    setOpen('');
    const date = moment().format('YYYY-MM-DD');
    dispatch(setAssetsByCategory({ assets: newData, updateDate: date }));
  }

  return (
    <>
      <MonthlyGoal
        title={`${today.format('M월')} 지출 Goal`}
        openAlertModal={() => setAlertModalOpen('modify')}
        open={showTooltip}
        monthlyConsumptionGoal={monthlyConsumptionGoal}
      />

      <RoundedPaper my={0}>
        <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>카테고리별 자산 세부 설정</Box>

        <Stack direction="row" justifyContent="space-between">
          <Box sx={{ color: '#979797' }}>설정 가능한 카테고리별 자산</Box>
          <Box sx={{ color: 'primary.main' }}>{`${monthlyConsumptionGoal.toLocaleString('ko-KR')}원`}</Box>
        </Stack>

        <Stack direction="row" justifyContent="space-between" mt={1}>
          <IconButton color="primary" onClick={() => setAlertModalOpen('reset')} sx={{ p: 0 }}>
            <RefreshIcon fontSize="small" />
          </IconButton>
          <Button variant="contained" size="small">추천 금액 불러오기</Button>
        </Stack>

        <CategoryList
          handleClick={handleClick}
          open={open}
          updateCategoryAssets={updateCategoryAssets}
        />
      </RoundedPaper>

      <ModalStaticBackdrop
        keepMounted
        width="xs"
        open={monthlyGoalModalOpen}
        component={(
          <InputModal setMonthlyGoalModalOpen={setMonthlyGoalModalOpen} />
        )}
      />

      <AlertModal
        open={alertModalOpen !== 'delete'}
        handleClose={() => setAlertModalOpen('delete')}
        handleClickYes={() => (alertModalOpen === 'modify' ? openMonthlyGoalModal() : resetAssetByCategory())}
        mode={alertModalOpen}
      />
    </>
  );
}

export default AssetsByCategory;
