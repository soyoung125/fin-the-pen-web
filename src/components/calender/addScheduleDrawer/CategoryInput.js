/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
// import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';oryory
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import {
  Autocomplete,
  Button, Stack, TextField, Typography, useAutocomplete,
} from '@mui/material';
import { useEffect, useState } from 'react';
import ADD_SCHEDULE from '../../../utils/constants/schedule';
import Root from './category/Root';
import Label from './category/Label';
import InputWrapper from './category/InputWrapper';
import StyledTag from './category/StyledTag';
import Listbox from './category/Listbox';
import CATEGORIES from '../../../utils/constants/categories';

export default function CategoryInput({ updateCategory }) {
  // const {
  //   getRootProps,
  //   getInputLabelProps,
  //   getInputProps,
  //   getTagProps,
  //   getListboxProps,
  //   getOptionProps,
  //   groupedOptions,
  //   value,
  //   focused,
  //   setAnchorEl,
  // } = useAutocomplete({
  //   id: 'customized-hook-demo',
  //   // defaultValue: [CATEGORIES[1]],
  //   multiple: true,
  //   options: CATEGORIES,
  //   getOptionLabel: (option) => option.title,
  // });

  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    if (value) {
      const category = CATEGORIES.filter((cat) => cat.title === value);
      if (category.length > 0) {
        updateCategory(category[0]);
      }
    }
  }, [value]);
  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
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
        options={CATEGORIES.map((cat) => cat.title)}
        renderInput={(params) => <TextField {...params} label={ADD_SCHEDULE.category_title} />}
      />
    </div>
  );
}
