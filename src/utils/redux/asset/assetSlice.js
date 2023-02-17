/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goal: {
    saving: {
      year: 0,
      month: 0,
    },
    personal: {
      name: 'dd',
      money: 0,
      deadline: '2024-01-01',
      type: 'day', // day||month,
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
    setPersonalGoal: (state, action) => {
      state.goal.personal = action.payload;
    },
  },
});
export const {
  setSavingGoal,
  setPersonalGoal,
} = assetSlice.actions;

export const selectSavingGoal = (state) => state.asset.goal.saving;
export const selectPersonalGoal = (state) => state.asset.goal.personal;

export default assetSlice.reducer;
