/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@mui/material';
// import moment from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay/PickersDay';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import React from 'react';

/**
 * --일정 스키마--
 * 고유 아이디 id
 * 유저 아이디 user_id
 * 날짜 date
 * 일정 시작 start_time
 * 일정 끝 end_time
 * 이벤트 이름 event_name
 * 타입(출금,입금) type
 * 금액 expected_spending
 * 예산 제외 exclusion
 * 카테고리 categories
 * 일정중요도 importance
 * + 정기 출금은??
 */

function Calender() {
  const [value, setValue] = React.useState(new Date());
  // eslint-disable-next-line no-unused-vars
  const [fixedWithdrawal, setFixedWithdrawal] = React.useState(['2023/01/24']);

  const renderDayInPicker = (day, _value, DayComponentProps) => {
    if (fixedWithdrawal.includes(day.format('YYYY/MM/DD'))) {
      return (
        <Box component="span" sx={{ border: 1, borderRadius: 2, borderColor: 'warning.main' }}>
          <PickersDay {...DayComponentProps} />
        </Box>
      );
    }

    return <PickersDay {...DayComponentProps} />;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderDay={renderDayInPicker}
      />
    </LocalizationProvider>
  );
}

export default Calender;

/**
 * 어떤 방식으로 작업할 지는 모르겠지만
 * 파일 명 등은 알아서 수정해주세요
 */
