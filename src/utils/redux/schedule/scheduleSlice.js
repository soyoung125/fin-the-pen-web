import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  date: '',
  schedules: [],
};

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addSchedule: (state, action) => {
      state.schedules.push(action.payload);
    },
    selectedDate: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.date = action.payload;
    },
  },
});
export const { addSchedule, selectedDate } = scheduleSlice.actions;

export const selectSchedules = (state) => state.schedule.schedules;
export const selectDate = (state) => state.schedule.date;

export default scheduleSlice.reducer;
