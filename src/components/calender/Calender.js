/* eslint-disable react/jsx-props-no-spreading */
import { Box, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay/PickersDay';
import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate, selectedDate, selectSchedules } from '../../utils/redux/schedule/scheduleSlice';

function Calender() {
  const dispatch = useDispatch();
  const value = useSelector(selectDate);
  const schedules = useSelector(selectSchedules);
  const DATE_SIZE = 32;
  const DATE_HEIGHT = 50;
  // eslint-disable-next-line no-unused-vars
  const [fixedWithdrawal, setFixedWithdrawal] = React.useState(['2023/01/24']);

  React.useEffect(() => {
    dispatch(selectedDate(moment(new Date())));
  }, []);

  const renderDayInPicker = (day, _value, DayComponentProps) => {
    if (fixedWithdrawal.includes(day.format('YYYY/MM/DD'))) {
      return (
        <PickersDay
          sx={{
            border: 1, borderRadius: 2, marginBottom: 2, borderColor: 'warning.light',
          }}
          {...DayComponentProps}
        />
      );
    }

    const daySchedules = schedules.filter((e) => e.date === day.format('YYYY-MM-DD'));

    if (daySchedules.length > 0) {
      return (
        <Box sx={{ width: DATE_SIZE, marginX: 'auto' }}>
          <Stack>
            <PickersDay sx={{ marginBottom: 2 }} {...DayComponentProps} />
            <Stack direction="row" justifyContent="center" spacing={0.5} mt={0.1}>
              {daySchedules.map(() => ( // 추후 e의 카테고리 별로 색 바꿀 예정
                <Box
                  key={Math.random()}
                  sx={{
                    width: '5px', height: '5px', border: '1px solid', borderRadius: 3,
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </Box>
      );
    }

    return <PickersDay sx={{ marginBottom: 2 }} {...DayComponentProps} />;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box
        sx={{
          '& > div': {
            minWidth: '100%',
          },
          '& > div > div, & > div > div > div, & .MuiCalendarPicker-root': {
            width: '100%',
          },
          // 헤더 디자인을 위한 css
          '.MuiPickersCalendarHeader-root': {
            display: 'flex',
            width: '100vw',
            paddingX: 2,
          },
          '.MuiPickersArrowSwitcher-root': {
            display: 'inline-flex',
          },
          '.MuiPickersCalendarHeader-label': {
            textAlign: 'center',
          },
          '.MuiPickersArrowSwitcher-spacer': {
            width: '100vw',
          },
          '.MuiPickersCalendarHeader-labelContainer > .MuiPickersFadeTransitionGroup-root': {
            position: 'absolute',
            left: 0,
            right: 0,
            alignItems: 'center',
          },

          // 데이 디자인을 위한 css
          '& .MuiTypography-caption': {
            width: '100%',
            margin: 0,
          },
          '& .PrivatePickersSlideTransition-root': {
            minHeight: DATE_HEIGHT * 5,
          },
          '& .PrivatePickersSlideTransition-root [role="row"]': {
            margin: 0,
          },
          '& .MuiPickersDay-dayWithMargin': {
            margin: 0,
          },
          '& .MuiDayPicker-weekContainer': {
            height: DATE_HEIGHT,
          },
          '& .MuiPickersDay-root': {
            width: DATE_SIZE,
            height: DATE_SIZE,
            marginX: 'auto',
          },
          '& .MuiPickersDay-root:focus': {
            borderRadius: 2,
            backgroundColor: 'secondary.light',
            color: 'white',
            fontWeight: 'bold',
          },
          '& [aria-current="date"]': {
            borderRadius: 2,
            backgroundColor: grey[100],
          },
        }}
      >
        <CalendarPicker
          views={['day']}
          displayStaticWrapperAs="desktop"
          disableHighlightToday
          dayOfWeekFormatter={(day) => day.substring(0, 3)}
          value={value}
          onChange={(newValue) => {
            dispatch(selectedDate(newValue));
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          renderDay={renderDayInPicker}
        />
      </Box>
    </LocalizationProvider>
  );
}

export default Calender;

/**
 * 어떤 방식으로 작업할 지는 모르겠지만
 * 파일 명 등은 알아서 수정해주세요
 */
