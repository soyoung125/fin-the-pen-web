import Checkbox from '@mui/material/Checkbox';
import {
  Box, Chip, Stack, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectFiltered, updateFilter, updateFiltersForce } from '../../../../../../utils/redux/schedule/scheduleSlice';

function FilterChips({ nested }) {
  const dispatch = useDispatch();
  const filtered = useSelector(selectFiltered);
  const [checked, setChecked] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(nested.categories);
  }, [nested]);

  const handleClick = (state) => {
    dispatch(updateFilter(state.target.innerText));
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    dispatch(updateFiltersForce({
      mode: checked ? 'write' : 'remove',
      categories,
    }));
  };

  const isFiltered = (cat) => filtered.findIndex((word) => word === cat) === -1;

  return (
    <Box key={nested.type}>
      <Stack direction="row" alignItems="center">
        <Typography>{nested.type}</Typography>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Stack>
      {nested.categories.map((cat) => (
        <Chip
          key={cat}
          label={cat}
          variant={isFiltered(cat) ? 'outlined' : 'contained'}
          onClick={handleClick}
          sx={{
            mr: 1,
            mb: 1,
            color: isFiltered(cat) ? nested.color : 'white',
          }}
        />
      ))}
    </Box>
  );
}
export default FilterChips;
