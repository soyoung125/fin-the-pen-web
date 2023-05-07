/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { initAssetsByCategory } from '../../tools';

const initialState = {
  goal: {
    saving: {
      year: 0,
      month: 0,
      skipRequest: false, // localStorage나 sessionStorage 에서 처리해줘도 괜찮을 듯 함
    },
    personal: {
      name: 'dd',
      money: 0,
      deadline: '2024-01-01',
      type: 'day', // day||month,
      autoSaving: true,
      popUp: false,
    },
  },
  assetByCategory: {
    goal: 0,
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
    setMonthlyConsumptionGoal: (state, action) => {
      state.assetByCategory.goal = action.payload;
    },
  },
});
export const {
  setSavingGoal,
  setPersonalGoal,
  setAssetsByCategory,
  setInitAssetsByCategory,
  setMonthlyConsumptionGoal,
} = assetSlice.actions;

export const selectSavingGoal = (state: any) => state.asset.goal.saving;
export const selectPersonalGoal = (state: any) => state.asset.goal.personal;
export const selectAssetsByCategory = (state: any) => state.asset.assetByCategory.assets;
export const selectUpdateDate = (state: any) => state.asset.assetByCategory.updateDate;
export const selectMonthlyConsumptionGoal = (state: any) => state.asset.assetByCategory.goal;

export default assetSlice.reducer;
