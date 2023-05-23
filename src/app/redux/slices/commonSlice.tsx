import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HEADER_MODE } from '../../../domain/constants/common';
import { HeaderModeValue } from '../../../types/common';
import { RootState } from '../store';

interface CommonState {
  headerOpen: boolean;
  headerMode: HeaderModeValue;
  guestMode: boolean;
  bottomDrawerOpen: boolean;
  bottomDrawerTabMenu: number;
  isAuthenticated: boolean;
}

const initialState: CommonState = {
  headerOpen: true,
  headerMode: HEADER_MODE.home,
  guestMode: false,
  bottomDrawerOpen: false,
  bottomDrawerTabMenu: 0,
  isAuthenticated: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setHeaderOpenTrue: (state, action: PayloadAction<HeaderModeValue | undefined>) => {
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
    setBottomDrawerTabMenu: (state, action) => {
      state.bottomDrawerTabMenu = action.payload;
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
  setBottomDrawerTabMenu,
  setIsAuthenticatedTrue,
  setIsAuthenticatedFalse,
} = commonSlice.actions;

export const selectHeaderOpen = (state: RootState) => state.common.headerOpen;
export const selectHeaderMode = (state: RootState) => state.common.headerMode;
export const selectGuestMode = (state: RootState) => state.common.guestMode;
export const selectBottomDrawerOpen = (state: RootState) => state.common.bottomDrawerOpen;
export const selectBottomDrawerTabMenu = (state: RootState) => state.common.bottomDrawerTabMenu;
export const selectIsAuthenticated = (state: RootState) => state.common.isAuthenticated;

export default commonSlice.reducer;
