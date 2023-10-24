import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { HEADER_MODE, HeaderModeType, HeaderTitleType } from "@type/common.tsx";

interface CommonState {
  headerOpen: boolean;
  headerMode: HeaderModeType;
  guestMode: boolean;
  headerTitle: HeaderTitleType;
}

const initialState: CommonState = {
  headerOpen: true,
  headerMode: HEADER_MODE.home,
  guestMode: false,
  headerTitle: "",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setHeaderOpenTrue: (
      state,
      action: PayloadAction<HeaderModeType | undefined>
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
    changeHeaderTitle: (state, action: PayloadAction<HeaderTitleType>) => {
      state.headerTitle = action.payload;
    },
  },
});
export const {
  setHeaderOpenTrue,
  setHeaderOpenFalse,
  setGuestModeTrue,
  setGuestModeFalse,
  changeHeaderTitle,
} = commonSlice.actions;

export const selectHeaderOpen = (state: RootState) => state.common.headerOpen;
export const selectHeaderMode = (state: RootState) => state.common.headerMode;
export const selectGuestMode = (state: RootState) => state.common.guestMode;
export const selectHeaderTitle = (state: RootState) => state.common.headerTitle;

export default commonSlice.reducer;
