import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HEADER_MODE } from "../../../domain/constants/common";
import { HeaderModeValue } from "../../../types/common";
import { RootState } from "../store";

interface CommonState {
  headerOpen: boolean;
  headerMode: HeaderModeValue;
  guestMode: boolean;
}

const initialState: CommonState = {
  headerOpen: true,
  headerMode: HEADER_MODE.home,
  guestMode: false,
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

  },
});
export const {
  setHeaderOpenTrue,
  setHeaderOpenFalse,
  setGuestModeTrue,
  setGuestModeFalse,
} = commonSlice.actions;

export const selectHeaderOpen = (state: RootState) => state.common.headerOpen;
export const selectHeaderMode = (state: RootState) => state.common.headerMode;
export const selectGuestMode = (state: RootState) => state.common.guestMode;


export default commonSlice.reducer;
