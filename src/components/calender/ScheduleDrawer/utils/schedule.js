/* eslint-disable import/prefer-default-export */
export const updateSchedule = (schedule, setSchedule, state) => {
  setSchedule({ ...schedule, [state.target.id]: state.target.value });
};

export const updateAlarm = (schedule, setSchedule) => {
  setSchedule({ ...schedule, alarm: !schedule.alarm });
};

export const updateRepeat = (schedule, setSchedule, setOpenDatePickerModal, state) => {
  if ((state.target.name === 'repeating_cycle') && (state.target.value === '없음')) {
    setSchedule({ ...schedule, [state.target.name]: state.target.value, repeat_deadline: '없음' });
  } else {
    setSchedule({ ...schedule, [state.target.name]: state.target.value });
  }
  if ((state.target.name === 'repeat_deadline') && (state.target.value !== '없음')) {
    setOpenDatePickerModal(true);
  }
};

export const updateRepeatEndDate = (schedule, setRepeatEndDate, endDate) => {
  if (endDate.isBefore(schedule.date)) {
    alert('반복 종료일을 다시 선택해주세요.');
  } else {
    setRepeatEndDate(endDate);
  }
};

export const updateCategory = (schedule, setSchedule, category) => {
  setSchedule({ ...schedule, category });
};
