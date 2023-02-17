/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goal: {
    saving: {
      year: 0,
      month: 0,
    },
    personal: {
      name: '',
      money: 0,
      deadline: '2024-01-01',
      type: 'day', // month,
      autoSaving: true,
    },
  },
};

export const assetSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    setSavingGoal: (state, action) => {
      state.goal.saving = action.payload;
    },
  },
});
export const {
  setSavingGoal,
} = assetSlice.actions;

export const selectSavingGoal = (state) => state.asset.goal.saving;
export const selectPersonalGoal = (state) => state.asset.goal.personal;

export default assetSlice.reducer;
