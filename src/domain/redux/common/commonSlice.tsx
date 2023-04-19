/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { HEADER_MODE } from '../../constants/common';
import { HeaderModeValue } from '../../../types/common';

interface InitialState {
  headerOpen: boolean;
  headerMode: HeaderModeValue;
  guestMode: boolean;
  bottomDrawerOpen: boolean;
  isAuthenticated: boolean;
}

const initialState: InitialState = {
  headerOpen: true,
  headerMode: HEADER_MODE.home,
  guestMode: false,
  bottomDrawerOpen: false,
  isAuthenticated: false,
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
    // 간편 인증 페이지 on/off
    setIsAuthenticatedTrue: (state) => {
      state.isAuthenticated = true;
    },
    setIsAuthenticatedFalse: (state) => {
      state.isAuthenticated = false;
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
  setIsAuthenticatedTrue,
  setIsAuthenticatedFalse,
} = commonSlice.actions;

export const selectHeaderOpen = (state: any) => (state.common as InitialState).headerOpen;
export const selectHeaderMode = (state: any) => (state.common as InitialState).headerMode;
export const selectGuestMode = (state: any) => (state.common as InitialState).guestMode;
// eslint-disable-next-line max-len
export const selectBottomDrawerOpen = (state: any) => (state.common as InitialState).bottomDrawerOpen;
export const selectIsAuthenticated = (state: any) => (state.common as InitialState).isAuthenticated;

export default commonSlice.reducer;
