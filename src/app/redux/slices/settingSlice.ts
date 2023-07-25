/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

/**
 *
 * 더 늦기 전에 프로퍼티 키 값을 한국어 => 영어로 바꿔야 합니당.
 */

const initialState = {
  settings: {
    // 화면설정
    앱비밀번호: false,
    인증단계: 1,
    다크모드: false,
    예산숨김: false,
    // 일정
    반복일정목록: [],
    숨김일정: false,
    숨김일정목록: false,
    // 보안/인증서
    비밀번호인증단계: 1,
    // 알림
    기본알림: false,
    진동: false,
    소리: false,
    알림음: '',
    잠금화면알람: false,
    일정알림시간: '5분전', // [5분전, 10분전, 15분전, 30분전, 1시간전, 자정 알림, 사용자지정]
    소비주의알림: false,
    정기입출금목록: [],
    // 연결관리
    마이데이터: [],
    캘린더목록: [],
  },
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    updateSettings: (state, action) => {
      state.settings = action.payload;
    },
    changeThemeMode: (state, action) => {
      state.settings.다크모드 = action.payload;
    },
    changeHideBudgetMode: (state, action) => {
      state.settings.예산숨김 = action.payload;
    },
  },
});
export const { updateSettings, changeThemeMode, changeHideBudgetMode } = settingSlice.actions;

export const selectSettings = (state: RootState) => state.setting.settings;
export const selectIsDarkMode = (state: RootState) => state.setting.settings.다크모드;
export const selectIsBudgetHidden = (state: RootState) => state.setting.settings.예산숨김;

export default settingSlice.reducer;
