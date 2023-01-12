/* eslint-disable react/jsx-props-no-spreading */
import { Box, Stack, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import { StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay/PickersDay';
import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate, selectedDate, selectSchedules } from '../../utils/redux/schedule/scheduleSlice';

function Calender() {
  const dispatch = useDispatch();
  const value = useSelector(selectDate);
  const schedules = useSelector(selectSchedules);

  const DATE_SIZE = 32;
  const DATE_HEIGHT = 50;

  useEffect(() => {
    dispatch(selectedDate(moment(new Date())));
  }, []);

  const renderDayInPicker = (day, _value, DayComponentProps) => {
    const daySchedules = schedules.filter((e) => e.date === day.format('YYYY-MM-DD'));

    const fixedWithdrawal = daySchedules.filter((s) => s.category.type === '고정 입출금');
    const nonFixedWithdrwal = daySchedules.filter((s) => s.category.type !== '고정 입출금');

    if (fixedWithdrawal.length > 0) {
      if (nonFixedWithdrwal.length > 0) {
        return (
          <Box sx={{ width: DATE_SIZE, marginX: 'auto' }}>
            <Stack>
              <PickersDay
                sx={{
                  border: 1,
                  borderRadius: 2,
                  marginBottom: 2,
                  borderColor: fixedWithdrawal[0].category.color,
                }}
                {...DayComponentProps}
              />
              <Stack direction="row" justifyContent="center" spacing={0.5} mt={0.2}>
                {nonFixedWithdrwal.map((s, index) => ( // 추후 e의 카테고리 별로 색 바꿀 예정
                  index < 3 ? (
                    <Box
                      key={Math.random()}
                      sx={{
                        width: '5px', height: '5px', border: '1px solid', borderRadius: 3, borderColor: s.category.color,
                      }}
                    />
                  )
                    : null
                ))}
              </Stack>
            </Stack>
          </Box>
        );
      }
      return (
        <PickersDay
          sx={{
            border: 1,
            borderRadius: 2,
            marginBottom: 2,
            borderColor: fixedWithdrawal[0].category.color,
          }}
          {...DayComponentProps}
        />
      );
    }

    if (nonFixedWithdrwal.length > 0) {
      return (
        <Box sx={{ width: DATE_SIZE, marginX: 'auto' }}>
          <Stack>
            <PickersDay sx={{ marginBottom: 2 }} {...DayComponentProps} />
            <Stack direction="row" justifyContent="center" spacing={0.5} mt={0.1}>
              {nonFixedWithdrwal.map((s, index) => ( // 추후 e의 카테고리 별로 색 바꿀 예정
                index < 3 ? (
                  <Box
                    key={Math.random()}
                    sx={{
                      width: '5px', height: '5px', border: '1px solid', borderRadius: 3, borderColor: s.category.color,
                    }}
                  />
                )
                  : null
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
          '.MuiCalendarOrClockPicker-root > div': {
            width: '100%',
            margin: '0',
          },
          '.MuiPickersCalendarHeader-root': {
            display: 'flex',
            width: '100vw',
            paddingX: 2,
          },
          '.MuiPickersArrowSwitcher-root': {
            width: '100vw',
            display: 'inline-flex',
            justifyContent: 'space-between',
          },
          '.MuiPickersCalendarHeader-label': {
            textAlign: 'center',
          },
          '.MuiPickersArrowSwitcher-spacer': {
            width: '50vw',
          },
          '.MuiPickersCalendarHeader-labelContainer': {
            position: 'absolute',
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
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
            backgroundColor: 'primary.main',
            color: 'white',
            fontWeight: 'bold',
          },
          '& [aria-current="date"]': {
            borderRadius: 2,
            backgroundColor: grey[100],
          },
        }}
      >
        <StaticDatePicker
          views={['day']}
          displayStaticWrapperAs="desktop"
          disableHighlightToday
          dayOfWeekFormatter={(day) => day.substring(0, 3)}
          value={moment(value)}
          onChange={(newValue) => {
            dispatch(selectedDate(newValue));
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          renderDay={renderDayInPicker}
          renderInput={(params) => <TextField {...params} />}
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
