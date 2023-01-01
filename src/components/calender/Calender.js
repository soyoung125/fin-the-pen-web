import TextField from '@mui/material/TextField';
// import moment from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import React from 'react';

function Calender() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default Calender;

/**
 * 어떤 방식으로 작업할 지는 모르겠지만
 * 파일 명 등은 알아서 수정해주세요
 */
