/* eslint-disable no-param-reassign */
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
    setSchedules: (state, action) => {
      state.schedules = action.payload;
    },
    selectedDate: (state, action) => {
      state.date = action.payload;
    },
  },
});
export const { addSchedule, setSchedules, selectedDate } = scheduleSlice.actions;

export const selectSchedules = (state) => state.schedule.schedules;
export const selectDate = (state) => state.schedule.date;

export default scheduleSlice.reducer;
