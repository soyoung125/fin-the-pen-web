import {
  Autocomplete, TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../../../../domain/constants/categories';
import { SCHEDULE_DRAWER } from '../../../../domain/constants/schedule';
import { selectSchedule } from '../../../../app/redux/slices/scheduleSlice';
import { updateSchedule } from '../domain/schedule';
import { useAppDispatch } from '../../../../app/redux/hooks';

export default function CategoryInput({ selected }: {selected: string}) {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const [value, setValue] = useState<string | null>(selected);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (value) {
      const category = CATEGORIES.filter((cat) => cat.title === value);
      if (category.length > 0) {
        updateSchedule(dispatch, schedule, {
          target: {
            id: 'category',
            value: category[0].title,
          },
        });
      }
    }
  }, [value]);

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="category"
        options={[''].concat(CATEGORIES.map((cat) => cat.title))}
        renderInput={(params) => (
          <TextField
            {...params}
            label={SCHEDULE_DRAWER.category_title}
          />
        )}
        size="small"
      />
    </div>
  );
}
