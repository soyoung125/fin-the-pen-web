import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface CommonState {
  guestMode: boolean;
}

const initialState: CommonState = {
  guestMode: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setGuestModeTrue: (state) => {
      state.guestMode = true;
    },
    setGuestModeFalse: (state) => {
      state.guestMode = false;
    },

  },
});
export const {
  setGuestModeTrue,
  setGuestModeFalse,
} = commonSlice.actions;
export const selectGuestMode = (state: RootState) => state.common.guestMode;

export default commonSlice.reducer;
