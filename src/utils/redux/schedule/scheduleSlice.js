/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { fetchMonthSchedules } from '../API';

const initialState = {
  // 메인
  date: moment(new Date()),
  status: 'idle',
  viewMode: 'asset',
  // 전체 일정 데이터
  schedules: [],
  // 서랍에 표시될 일정 1개
  schedule: null,
  // 필터
  filtered: [],
  filtered_date: {
    start: '',
    end: '',
  },
};

export const getMonthSchedules = createAsyncThunk(
  'schedule/getMonthSchedules',
  async (schedule) => {
    const response = await fetchMonthSchedules(schedule);
    return response;
  },
);

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
    setDrawerSchedule: (state, action) => {
      state.schedule = action.payload;
    },
    selectedDate: (state, action) => {
      state.date = action.payload;
    },
    updateFilter: (state, action) => {
      /**
       * 1. 배열 안에 이미 있는 단어라면 제거
       * 2. 배열 안에 없는 단어라면 추가
       */
      if (state.filtered.includes(action.payload)) {
        state.filtered = state.filtered.filter((f) => f !== action.payload);
      } else {
        const set = new Set([...state.filtered].concat(action.payload));
        state.filtered = Array.from(set);
      }
    },
    updateFiltersForce: (state, action) => {
      /**
       * mode가 write라면 들어온 categories를 state.filtered에 강제로 추가
       * mode가 remove라면 들어온 categories를 state.filtered에서 강제로 제거
       */
      const { mode, categories } = action.payload;
      switch (mode) {
        case 'write':
          state.filtered = Array.from(new Set([...state.filtered].concat(categories)));
          break;
        case 'remove':
          categories.forEach((cat) => {
            state.filtered = state.filtered.filter((f) => f !== cat);
          });
          break;
        default:
          alert('잘못 된 요청입니다.');
      }
    },
    setFilteredDate: (state, action) => {
      state.filtered_date[action.payload.type] = action.payload.date;
    },
    initFilter: (state) => {
      state.filtered = [];
      state.filtered_date = {
        start: '',
        end: '',
      };
    },
    changeViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMonthSchedules.pending, (state) => {
      // mockLogin가 진행중일 때
        state.status = 'loading';
      })
      .addCase(getMonthSchedules.fulfilled, (state, action) => {
      // mockLogin가 끝나면
        state.status = 'idle';
        state.schedules = action.payload;
      });
  },
});
export const {
  addSchedule,
  deleteSchedule,
  setSchedules,
  setDrawerSchedule,
  selectedDate,
  modifySchedule,
  updateFilter,
  updateFiltersForce,
  setFilteredDate,
  initFilter,
  changeViewMode,
} = scheduleSlice.actions;

export const selectSchedules = (state) => [...state.schedule.schedules].sort((a, b) => a.start_time.localeCompare(b.start_time));
export const selectDate = (state) => state.schedule.date;
export const selectFiltered = (state) => state.schedule.filtered;
export const selectFilteredDate = (state) => state.schedule.filtered_date;
export const selectViewMode = (state) => state.schedule.viewMode;
export const selectSchedule = (state) => state.schedule.schedule;
export const selectStatus = (state) => state.schedule.status;

export default scheduleSlice.reducer;
