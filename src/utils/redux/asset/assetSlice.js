/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savingGoal: {
    year: 0,
    month: 0,
  },
  personalGoal: {
    name: '',
    money: 0,
    deadline: '2024-01-01',
    type: 'day', // month,
    autoSaving: true,
  },
};

export const assetSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    setHeaderOpenTrue: (state, action) => { // 삭제 예정
      const mode = action.payload;
      if (mode !== undefined) {
        state.headerMode = mode;
      }
      state.headerOpen = true;
    },
  },
});
export const {
  setHeaderOpenTrue,
} = assetSlice.actions;

export const selectSavingGoal = (state) => state.asset.savingGoal;
export const selectPersonalGoal = (state) => state.asset.personalGoal;

export default assetSlice.reducer;
