/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { initAssetsByCategory } from '../../tools';

const initialState = {
  goal: {
    saving: {
      year: 0,
      month: 0,
      skipRequest: false,
    },
    personal: {
      name: 'dd',
      money: 0,
      deadline: '2024-01-01',
      type: 'day', // day||month,
      autoSaving: true,
    },
  },
  assetByCategory: {
    assets: initAssetsByCategory(),
    updateDate: moment().format('YYYY-MM-DD'),
  },
};

export const assetSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    setSavingGoal: (state, action) => {
      state.goal.saving = action.payload;
    },
    setSavingGoalSkipRequestTrue: (state) => {
      state.goal.saving = true;
    },
    setPersonalGoal: (state, action) => {
      state.goal.personal = action.payload;
    },
    setAssetsByCategory: (state, action) => {
      state.assetByCategory.assets = action.payload.assets;
      state.assetByCategory.updateDate = action.payload.updateDate;
    },
    setInitAssetsByCategory: (state) => {
      state.assetByCategory.assets = initAssetsByCategory();
      state.assetByCategory.updateDate = moment().format('YYYY-MM-DD');
    },
  },
});
export const {
  setSavingGoal,
  setSkipRequestTrue,
  setPersonalGoal,
  setAssetsByCategory,
  setInitAssetsByCategory,
} = assetSlice.actions;

export const selectSavingGoal = (state) => state.asset.goal.saving;
export const selectPersonalGoal = (state) => state.asset.goal.personal;
export const selectAssetsByCategory = (state) => state.asset.assetByCategory.assets;
export const selectUpdateDate = (state) => state.asset.assetByCategory.updateDate;

export default assetSlice.reducer;
