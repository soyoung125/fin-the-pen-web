import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HEADER_MODE } from "../../../domain/constants/common";
import { HeaderModeValue } from "../../../types/common";
import { RootState } from "../store";

interface CommonState {
  headerOpen: boolean;
  headerMode: HeaderModeValue;
  guestMode: boolean;
  bottomDrawerTabMenu: number;
}

const initialState: CommonState = {
  headerOpen: true,
  headerMode: HEADER_MODE.home,
  guestMode: false,
  bottomDrawerTabMenu: 0,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setHeaderOpenTrue: (
      state,
      action: PayloadAction<HeaderModeValue | undefined>
    ) => {
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
    setBottomDrawerTabMenu: (state, action) => {
      state.bottomDrawerTabMenu = action.payload;
    },
  },
});
export const {
  setHeaderOpenTrue,
  setHeaderOpenFalse,
  setGuestModeTrue,
  setGuestModeFalse,
  setBottomDrawerTabMenu,
} = commonSlice.actions;

export const selectHeaderOpen = (state: RootState) => state.common.headerOpen;
export const selectHeaderMode = (state: RootState) => state.common.headerMode;
export const selectGuestMode = (state: RootState) => state.common.guestMode;
export const selectBottomDrawerTabMenu = (state: RootState) =>
  state.common.bottomDrawerTabMenu;

export default commonSlice.reducer;
