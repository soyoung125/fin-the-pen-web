import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerOpen: true,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setHeaderOpenTrue: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.headerOpen = true;
    },
    setHeaderOpenFalse: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.headerOpen = false;
    },
  },
});
export const { setHeaderOpenTrue, setHeaderOpenFalse } = commonSlice.actions;

export const selectHeaderOpen = (state) => state.common.headerOpen;

export default commonSlice.reducer;
