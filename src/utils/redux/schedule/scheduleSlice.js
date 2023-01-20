/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  date: moment(new Date()),
  schedules: [],
  filtered: [],
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
    modifySchedule: (state, action) => {
      state.schedules = state.schedules.map((s) => (s.id === action.payload.id ? action.payload : s));
    },
    setSchedules: (state, action) => {
      state.schedules = action.payload;
    },
    selectedDate: (state, action) => {
      state.date = action.payload;
    },
    addFilter: (state, action) => {
      state.filtered.add(action.payload);
    },
    deleteFilter: (state, action) => {
      state.filtered = new Set([...state.filtered].filter((cat) => cat !== action.payload));
    },
  },
});
export const {
  addSchedule,
  deleteSchedule,
  setSchedules,
  selectedDate,
  modifySchedule,
  addFilter,
  deleteFilter,
} = scheduleSlice.actions;

export const selectSchedules = (state) => state.schedule.schedules;
export const selectDate = (state) => state.schedule.date;
export const selectFiltered = (state) => state.schedule.filtered;

export default scheduleSlice.reducer;
