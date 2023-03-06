import {
  Box, IconButton, Stack,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { EXPENDITURE } from '../../../../utils/constants/categories';
import MonthlyGoal from './MonthlyGoal';
import CategoryList from './CategoryList';

function AssetsByCategory() {
  const [open, setOpen] = useState('');
  const [assets, setAssets] = useState([]);
  const today = moment();

  useEffect(() => {
    setAssets(EXPENDITURE.nested
      .map((category) => ({
        ...category,
        categories: category.categories.map((c) => ({ title: c, asset: 0 })),
      })));
  }, []);
  const handleClick = (type) => {
    if (open === type) {
      setOpen('');
    } else {
      setOpen(type);
    }
  };

  return (
    <>
      <MonthlyGoal
        title={`${today.format('M월')} Goal`}
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
        assets={assets}
        handleClick={handleClick}
        open={open}
      />
    </>
  );
}

export default AssetsByCategory;
