/* eslint-disable no-unused-vars */
import {
  Alert,
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  Select,
  Stack, Typography,
} from '@mui/material';
import { useState } from 'react';
import ADD_SCHEDULE from '../../../utils/constants/schedule';

function CategoryInput({ schedule, updateSchedule }) {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  const [multiSelectOpen, setMultiselectOpen] = useState(false);
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
        <Button onClick={() => setMultiselectOpen(!multiSelectOpen)}>
          {ADD_SCHEDULE.add_category}
        </Button>
      </Stack>
      {
        multiSelectOpen
        && (
        <FormControl size="small">
          <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="Grouping">
            <option aria-label="None" value="" />
            <optgroup label="Category 1">
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
            </optgroup>
            <optgroup label="Category 2">
              <option value={3}>Option 3</option>
              <option value={4}>Option 4</option>
            </optgroup>
          </Select>
        </FormControl>
        )
      }
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
