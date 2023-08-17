import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { CATEGORIES, Category } from '../../../../domain/constants/categories';
import { REPEAT_CYCLE, SCHEDULE_DRAWER } from '../../../../domain/constants/schedule';
import { createSchedule, getMonthSchedules, setDrawerSchedule } from '../../../../app/redux/slices/scheduleSlice';
import { Schedule } from '../../../../types/schedule';
import { Dispatch } from 'redux';
import { UpdateStateInterface, User } from '../../../../types/common';
import { SelectChangeEvent } from '@mui/material/Select';
import { AppDispatch } from '../../../../app/redux/store';

/**
 * index
 */

export const updateSchedule = (dispatch: Dispatch, schedule: Schedule | null, state: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | UpdateStateInterface) => {
  dispatch(setDrawerSchedule({ ...schedule, [state.target.id]: state.target.value }));
  if (state.target.id === 'start_time') {
    const endTime = moment(state.target.value as string, 'HH:mm').add(2, 'hours').format('HH:mm');
    dispatch(setDrawerSchedule({
      ...schedule, [state.target.id]: state.target.value, end_time: endTime,
    }));
  }
};

export const updateRepeat = (dispatch: Dispatch, schedule: Schedule | null, setOpenDatePickerModal: React.Dispatch<React.SetStateAction<boolean>>, state: SelectChangeEvent<string>) => {
  if ((state.target.name === 'repeating_cycle') && (state.target.value === '없음')) {
    dispatch(setDrawerSchedule({
      ...schedule,
      [state.target.name]: state.target.value,
      repeat_deadline: '없음',
    }));
  } else {
    dispatch(setDrawerSchedule({
      ...schedule,
      [state.target.name]: state.target.value,
    }));
  }
  if ((state.target.name === 'repeat_deadline') && (state.target.value !== '없음')) {
    setOpenDatePickerModal(true);
  }
};

export const updateRepeatEndDate = (schedule: Schedule | null, setRepeatEndDate: React.Dispatch<React.SetStateAction<moment.Moment>>, endDate: moment.Moment | null) => {
  if (endDate?.isBefore(schedule?.date)) {
    alert('반복 종료일을 다시 선택해주세요.');
  } else {
    endDate && setRepeatEndDate(endDate);
  }
};

export const updateSpendingType = (dispatch: Dispatch, schedule: Schedule | null) => {
  if (schedule?.type === SCHEDULE_DRAWER.type_plus) {
    dispatch(setDrawerSchedule({ ...schedule, type: SCHEDULE_DRAWER.type_minus }));
  } else {
    dispatch(setDrawerSchedule({ ...schedule, type: SCHEDULE_DRAWER.type_plus }));
  }
};

export const updateExclusion = (dispatch: Dispatch, schedule: Schedule | null, state: React.ChangeEvent<HTMLInputElement>) => {
  dispatch(setDrawerSchedule({ ...schedule, exclusion: state.target.checked }));
};

// 안쓰는 함수 같음
export const switchTitle = (id: string) => {
  switch (id) {
    case 'start_time':
      return '일정 시작 시각';
    case 'end_time':
      return '일정 종료 시각';
    default:
      return 'error';
  }
};

/**
 * Footer
 */

export const handleCreate = async (
  dispatch: AppDispatch,
  schedule: Schedule,
  user: User | null,
  guestMode: boolean,
  date: moment.Moment,
  handleClose: () => void,
) => {
  const scheduleWithUuid = {
    ...schedule,
    id: uuidv4(),
    user_id: user?.user_id,
  };
  // 반복 일정 추가
  if ((schedule.repeating_cycle !== '없음') && (schedule.repeat_deadline !== '없음')) {
    let repeatDate = moment(schedule.date).add(1, REPEAT_CYCLE[schedule.repeating_cycle]);
    while (moment(schedule.repeat_endDate).isSameOrAfter(repeatDate)) {
      // eslint-disable-next-line no-await-in-loop
      const newData = {
        ...scheduleWithUuid,
        id: uuidv4(),
        date: repeatDate.format('YYYY-MM-DD'),
      };
      dispatch(createSchedule(newData));
      repeatDate = moment(repeatDate).add(1, REPEAT_CYCLE[schedule.repeating_cycle]);
    }
  }
  // 원래 일정 추가
  console.log(scheduleWithUuid);
  const result = await dispatch(createSchedule(scheduleWithUuid));
  if (!guestMode) { // 게스트 모드가 아니라면, 현재 서버 상태를 새롭게 요청하기
    dispatch(getMonthSchedules({
      user_id: user?.user_id || '',
      date: moment(date).format('YYYY-MM'),
    }));
  }
  handleClose();
};

/**
 * date를 주면, 해당 날짜에 랜덤한 일정을 만들어준다.
 * @param {*} date
 * @returns schedule
 */
export const generateRandomSchedule = (date: moment.Moment) => {
  const generateRandomString = (num: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const importances = ['상', '중', '하'];
  const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]
  return {
    event_name: generateRandomString(5),
    alarm: Math.floor(Math.random() * 2) === 0,
    date: date.format('YYYY-MM-DD'),
    start_time: `0${Math.floor(Math.random() * 9 + 1)}:00`,
    end_time: `2${Math.floor(Math.random() * 4)}:00`,
    repeating_cycle: '없음',
    repeat_deadline: '없음',
    repeat_endDate: date.format('YYYY-MM-DD'),
    category: category.title,
    type: getType(category),
    expected_spending: Math.floor(Math.random() * 1000) * 100,
    importance: importances[Math.floor(Math.random() * 3)],
    exclusion: Math.floor(Math.random() * 2) === 0,
  };
};

export const getType = (category: Category) => {
  const type = category.type;
  const nestedType = category.nestedType;
  if(type === '수입' || nestedType === '입금') {
    return '+';
  } else {
    return '-';
  }
}