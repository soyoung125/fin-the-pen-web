/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { fetchCreateSchedule, fetchDeleteSchedule, fetchMonthSchedules } from '../../../utils/redux/API';
import { fetchMockCreateSchedule, fetchMockDeleteSchedule } from '../../../utils/redux/mockAPI';
import { Schedule, ViewModeValue } from '../../../types/schedule';
import { ASYNC_THUNK_STATUS } from '../../constants/common';
import { AsyncThunkStatusValue } from '../../../types/common';

interface InitialState {
  // 메인
  date: moment.Moment;
  status: AsyncThunkStatusValue; // 타입 유니온 필요
  viewMode: ViewModeValue;
  // 전체 일정 데이터
  schedules: Schedule[];
  // 서랍에 표시될 일정 1개
  schedule: Schedule | null;
  // 필터
  filtered: string[];
  filtered_date: {
    start: string;
    end: string;
  },
}

const initialState: InitialState = {
  date: moment(new Date()),
  status: 'idle',
  viewMode: 'asset',
  schedules: [],
  schedule: null,
  filtered: [],
  filtered_date: {
    start: '',
    end: '',
  },
};

// 버그 있을 수 있음
export const getMonthSchedules = createAsyncThunk(
  'schedule/getMonthSchedules',
  async ({ user_id, date }: { user_id: string, date: string }) => {
    const response = await fetchMonthSchedules({ user_id, date });
    return response.data;
  },
);

export const createSchedule = createAsyncThunk(
  'schedule/createSchedule',
  async (scheduleWithUuid, { getState }: any) => {
    const { guestMode } = getState().common;
    if (guestMode) {
      // console.log('게스트 모드에서 추가');/
      const response = await fetchMockCreateSchedule(scheduleWithUuid);
      return response.data;
    }
    // console.log('일반 모드에서 추가');
    // console.log(scheduleWithUuid);
    await fetchCreateSchedule(scheduleWithUuid);
    return null;
  },
);

export const deleteSchedule = createAsyncThunk(
  'schedule/deleteSchedule',
  async (id, { getState }: any) => {
    // console.log(id);
    const { guestMode } = getState().common;
    if (guestMode) {
      // console.log('게스트 모드에서 제거');
      const response = await fetchMockDeleteSchedule(id);
      return response.data;
    }
    // console.log('일반 모드에서 제거');
    await fetchDeleteSchedule(id);
    return null;
  },
);

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    modifySchedule: (state: any, action) => {
      state.schedules = state.schedules.map((s: any) => (s.id === action.payload.id ? action.payload : s));
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

      if (state.filtered.includes(action.payload as string)) {
        state.filtered = state.filtered.filter((filteredWord) => filteredWord !== action.payload);
      } else {
        const set = new Set([...state.filtered].concat(action.payload as string));
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
          categories.forEach((cat: any) => {
            state.filtered = state.filtered.filter((f) => f !== cat);
          });
          break;
        default:
          alert('잘못된 요청입니다.');
      }
    },
    setFilteredDate: (state: any, action) => {
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
        // getMonthSchedules 가 진행중일 때
        state.status = ASYNC_THUNK_STATUS.pending;
      })
      .addCase(getMonthSchedules.fulfilled, (state, action) => {
        // getMonthSchedules 가 끝나면
        state.status = ASYNC_THUNK_STATUS.fulfilled;
        state.schedules = action.payload;
      })
      .addCase(createSchedule.fulfilled, (state, action: any) => {
        // createSchedule 가 끝나면
        if (action.payload !== null) {
          state.schedules.push(action.payload as never); // schedules의 타입이 지정되면 never를 제거할 수 있습니다...!
        }
      })
      .addCase(deleteSchedule.fulfilled, (state, action) => {
        // deleteSchedule 가 끝나면
        if (action.payload !== null) {
          state.schedules = state.schedules.filter((s: any) => s.id !== action.payload);
        }
      });
  },
});
export const {
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

export const selectSchedules = (state: any) => [...(state.schedule as InitialState).schedules].sort((a, b) => a.start_time.localeCompare(b.start_time));
export const selectDate = (state: any) => (state.schedule as InitialState).date;
export const selectFiltered = (state: any): string[] => (state.schedule as InitialState).filtered;
export const selectFilteredDate = (state: any) => (state.schedule as InitialState).filtered_date;
export const selectViewMode = (state: any) => (state.schedule as InitialState).viewMode;
export const selectSchedule = (state: any) => (state.schedule as InitialState).schedule;
export const selectStatus = (state: any) => (state.schedule as InitialState).status;

export default scheduleSlice.reducer;
