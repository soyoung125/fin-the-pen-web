/* eslint-disable no-unused-vars */
import {
  Alert,
  Box,
  Button,
  Chip,
  Stack, Typography,
} from '@mui/material';
import { useState } from 'react';
import ADD_SCHEDULE from '../../../utils/constants/schedule';

function CategoryInput({ schedule, updateSchedule }) {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  const [categories, setCategories] = useState([]);
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%' }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>{ADD_SCHEDULE.category_title}</Typography>
        <Button>{ADD_SCHEDULE.add_category}</Button>
      </Stack>
      <Box>
        {
        categories.length === 0
          ? <Typography>카테고리를 등록해주세요</Typography>
          : categories.map((num) => <Chip key={num} label={num} variant="outlined" onDelete={handleDelete} sx={{ mr: 1, mb: 1 }} />)
    }
      </Box>
    </>
  );
}
export default CategoryInput;
