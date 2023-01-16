/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  date: moment(new Date()),
  schedules: [],
};

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addSchedule: (state, action) => {
      state.schedules.push(action.payload);
    },
    deleteSchedule: (state, action) => {
      state.schedules = state.schedules.filter((s) => s.id !== action.payload);
    },
    setSchedules: (state, action) => {
      state.schedules = action.payload;
    },
    selectedDate: (state, action) => {
      state.date = action.payload;
    },
  },
});
export const {
  addSchedule, deleteSchedule, setSchedules, selectedDate,
} = scheduleSlice.actions;

export const selectSchedules = (state) => state.schedule.schedules;
export const selectDate = (state) => state.schedule.date;

export default scheduleSlice.reducer;
