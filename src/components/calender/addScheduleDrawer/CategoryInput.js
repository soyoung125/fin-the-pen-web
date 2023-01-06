/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import * as React from 'react';
// import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import {
  Button, Stack, Typography, useAutocomplete,
} from '@mui/material';
import ADD_SCHEDULE from '../../../utils/constants/schedule';
import Root from './category/Root';
import Label from './category/Label';
import InputWrapper from './category/InputWrapper';
import StyledTag from './category/StyledTag';
import Listbox from './category/Listbox';
import CATEGORIES from '../../../utils/constants/categories';

export default function CategoryInput({ updateCategories }) {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    // defaultValue: [CATEGORIES[1]],
    multiple: true,
    options: CATEGORIES,
    getOptionLabel: (option) => option.title,
  });

  React.useEffect(() => {
    updateCategories(value);
  }, [value]);

  return (
    <>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%' }}
      >
        <Typography mx={1} sx={{ fontWeight: 'bold' }}>{ADD_SCHEDULE.category_title}</Typography>
      </Stack>

      <Root>
        <div {...getRootProps()}>
          {/* <Label {...getInputLabelProps()}>Customized hook</Label> */}
          <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
            {value.map((option, index) => (
              <StyledTag label={option.title} {...getTagProps({ index })} />
            ))}

            <input {...getInputProps()} />
          </InputWrapper>
        </div>
        {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li {...getOptionProps({ option, index })}>
                <span>{option.title}</span>
                <CheckIcon fontSize="small" />
              </li>
            ))}
          </Listbox>
        ) : null}
      </Root>

    </>
  );
}
