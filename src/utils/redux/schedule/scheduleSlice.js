/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  date: moment(new Date()),
  schedules: [],
  filtered: [],
  viewMode: 'schedule',
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
    updateFilter: (state, action) => {
      /**
       * 수정 예정
       *
       * 1. 배열 안에 이미 있는 단어라면 제거
       * 2. 배열 안에 없는 단어라면 추가
       */
      state.filtered.push(action.payload);
    },
    initFilter: (state) => {
      state.filtered = [];
    },
    changeViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
  },
});
export const {
  addSchedule,
  deleteSchedule,
  setSchedules,
  selectedDate,
  modifySchedule,
  updateFilter,
  initFilter,
  changeViewMode,
} = scheduleSlice.actions;

export const selectSchedules = (state) => state.schedule.schedules;
export const selectDate = (state) => state.schedule.date;
export const selectFiltered = (state) => state.schedule.filtered;
export const selectViewMode = (state) => state.schedule.viewMode;

export default scheduleSlice.reducer;
