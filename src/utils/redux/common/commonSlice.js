/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerOpen: true,
  headerMode: 'home',
  guestMode: false,
  bottomDrawerOpen: false,
  postAuthenticationPage: null,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setHeaderOpenTrue: (state, action) => {
      const mode = action.payload;
      if (mode !== undefined) {
        state.headerMode = mode;
      }
      state.headerOpen = true;
    },
    setHeaderOpenFalse: (state) => {
      state.headerOpen = false;
    },
    setGuestModeTrue: (state) => {
      state.guestMode = true;
    },
    setGuestModeFalse: (state) => {
      state.guestMode = false;
    },
    setBottomDrawerOpenTrue: (state) => {
      state.bottomDrawerOpen = true;
    },
    setBottomDrawerOpenFalse: (state) => {
      state.bottomDrawerOpen = false;
    },
    // 간편 인증 후 나올 페이지
    setPostAuthenticationPage: (state, action) => {
      state.postAuthenticationPage = action.payload;
    },
  },
});
export const {
  setHeaderOpenTrue,
  setHeaderOpenFalse,
  setGuestModeTrue,
  setGuestModeFalse,
  setBottomDrawerOpenTrue,
  setBottomDrawerOpenFalse,
  setPostAuthenticationPage,
} = commonSlice.actions;

export const selectHeaderOpen = (state) => state.common.headerOpen;
export const selectHeaderMode = (state) => state.common.headerMode;
export const selectGuestMode = (state) => state.common.guestMode;
export const selectBottomDrawerOpen = (state) => state.common.bottomDrawerOpen;
export const selectPostAuthenticationPage = (state) => state.common.postAuthenticationPage;

export default commonSlice.reducer;
