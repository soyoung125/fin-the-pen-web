/* eslint-disable no-unused-vars */
import {
  Box, IconButton, Stack,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EXPENDITURE } from '../../../../utils/constants/categories';
import MonthlyGoal from './MonthlyGoal';
import CategoryList from './CategoryList';
import {
  selectAssetsByCategory, selectUpdateDate, setAssetsByCategory, setInitAssetsByCategory,
} from '../../../../utils/redux/asset/assetSlice';

function AssetsByCategory() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState('');
  // const [assets, setAssets] = useState([]);
  const today = moment();
  const assets = useSelector(selectAssetsByCategory);
  const updateDate = useSelector(selectUpdateDate);

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
          .map((c) => (c.title === title ? { ...c, asset: value.toLocaleString('kr-KO') } : c)),
        total: category.total - parseInt(preValue, 10) + value,
      }
      : category));
    const date = moment().format('YYYY-MM-DD');
    dispatch(setAssetsByCategory({ assets: data, updateDate: date }));
  };

  return (
    <>
      <MonthlyGoal
        title={`${today.format('M월')} 지출 Goal`}
      />

      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ color: '#979797' }}>설정 가능한 카테고리별 자산</Box>
        <Box sx={{ color: 'primary.main' }}>xxxxxxx원</Box>
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
        <IconButton color="primary" onClick={() => console.log('refresh')} sx={{ p: 0 }}>
          <RefreshIcon fontSize="small" />
        </IconButton>
      </Box>

      <CategoryList
        handleClick={handleClick}
        open={open}
        modifyAsset={modifyAsset}
      />
    </>
  );
}

export default AssetsByCategory;
