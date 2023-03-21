import {
  Box, IconButton, Stack,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from './CategoryList';
import {
  selectAssetsByCategory,
  selectMonthlyConsumptionGoal,
  selectUpdateDate,
  setAssetsByCategory,
  setInitAssetsByCategory,
} from '../../../../utils/redux/asset/assetSlice';
import MonthlyGoal from './MonthlyGoal';
import AlertModal from '../../../../components/common/AlertModal';
import ModalStaticBackdrop from '../../../../components/layouts/ModalStaticBackdrop';
import InputModal from './MonthlyGoal/InputModal';

function AssetsByCategory() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState('');
  const [monthlyGoalModalOpen, setMonthlyGoalModalOpen] = useState(false);
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  // const [assets, setAssets] = useState([]);
  const today = moment();
  const assets = useSelector(selectAssetsByCategory);
  const updateDate = useSelector(selectUpdateDate);
  const monthlyconsumptionGoal = useSelector(selectMonthlyConsumptionGoal);

  useEffect(() => {
    if (today.isAfter(updateDate, 'month')) {
      dispatch(setInitAssetsByCategory());
    }
  }, []);

  const handleClick = (type) => {
    if (open === type) {
      setOpen('');
    } else {
      setOpen(type);
    }
  };

  const modifyAsset = (type, title, preValue, value) => {
    const data = assets.map((category) => (category.type === type
      ? {
        ...category,
        categories: category.categories
          .map((c) => (c.title === title ? { ...c, asset: value } : c)),
        total: category.total - preValue + value,
      }
      : category));
    const date = moment().format('YYYY-MM-DD');
    dispatch(setAssetsByCategory({ assets: data, updateDate: date }));
  };

  const openMonthlyGoalModal = () => {
    setAlertModalOpen(false);
    setMonthlyGoalModalOpen(true);
  };

  return (
    <>
      <MonthlyGoal
        title={`${today.format('M월')} 지출 Goal`}
        openAlertModal={() => setAlertModalOpen(true)}
        open={!monthlyGoalModalOpen && !alertModalOpen}
        monthlyconsumptionGoal={monthlyconsumptionGoal}
      />

      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ color: '#979797' }}>설정 가능한 카테고리별 자산</Box>
        <Box sx={{ color: 'primary.main' }}>{`${monthlyconsumptionGoal.toLocaleString('ko-KR')}원`}</Box>
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
        <IconButton color="primary" onClick={() => dispatch(setInitAssetsByCategory())} sx={{ p: 0 }}>
          <RefreshIcon fontSize="small" />
        </IconButton>
      </Box>

      <CategoryList
        handleClick={handleClick}
        open={open}
        modifyAsset={modifyAsset}
      />

      <ModalStaticBackdrop
        keepMounted
        width="xs"
        open={monthlyGoalModalOpen}
        component={(
          <InputModal setMonthlyGoalModalOpen={setMonthlyGoalModalOpen} />
        )}
      />

      <AlertModal
        open={alertModalOpen}
        handleClose={() => setAlertModalOpen(false)}
        handleClickYes={() => openMonthlyGoalModal()}
        mode="modify"
      />
    </>
  );
}

export default AssetsByCategory;
