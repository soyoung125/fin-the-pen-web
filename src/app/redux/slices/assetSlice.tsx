/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { initAssetsByCategory } from "@utils/tools.ts";
import { RootState } from "../store";
import { AssetsByCategoryInterface } from "@app/types/common.ts";

interface InitialState {
  goal: {
    saving: {
      year: number;
      month: number;
      skipRequest: boolean; // localStorage나 sessionStorage 에서 처리해줘도 괜찮을 듯 함
      autoSaving: boolean;
      popUp: boolean;
    };
    personal: {
      name: string;
      money: number;
      deadline: string;
      type: "" | "day" | "month";
      autoSaving: boolean;
      popUp: boolean;
    };
  };
  savingDetailSetting: {
    priority: "saving" | "personal";
    remittance: {
      isOn: boolean;
      settings: {
        bankName: string;
        accountNumber: string;
        date: string; // 'none' | '매달 1일' | '매달 15일' | '매달 마지막날' | '직접 설정' | '매달 n일'
        amount: number;
      };
    };
    notification: {
      isOn: boolean;
      time: string;
    };
    popup: {
      isOn: boolean;
      settings: {
        display: "none(아이콘)" | "저축금액(퍼센트)";
        connect: "저축 목표 설정 페이지" | "적금 계좌 APP";
      };
    };
  };
  assetByCategory: {
    goal: number;
    assets: AssetsByCategoryInterface[];
    updateDate: string;
  };
  assetMenu: number;
}

const initialState: InitialState = {
  goal: {
    saving: {
      year: 0,
      month: 0,
      skipRequest: false, // localStorage나 sessionStorage 에서 처리해줘도 괜찮을 듯 함
      autoSaving: true,
      popUp: false,
    },
    personal: {
      name: "dd",
      money: 0,
      deadline: "2024-01-01",
      type: "day", // day||month,
      autoSaving: true,
      popUp: false,
    },
  },
  savingDetailSetting: {
    priority: "saving", // saving(한해 저축 목표) || personal
    remittance: {
      isOn: true,
      settings: {
        bankName: "",
        accountNumber: "",
        date: "none",
        amount: 0,
      },
    },
    notification: {
      isOn: true,
      time: "08:00",
    },
    popup: {
      isOn: false,
      settings: {
        display: "none(아이콘)", // none(아이콘) || 저축금액(퍼센트)
        connect: "저축 목표 설정 페이지", // 저축목표설정페이지 || 계좌 앱
      },
    },
  },
  assetByCategory: {
    goal: 0,
    assets: initAssetsByCategory(),
    updateDate: moment().format("YYYY-MM-DD"),
  },
  assetMenu: 0,
};

export const assetSlice = createSlice({
  name: "asset",
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
      state.assetByCategory.updateDate = moment().format("YYYY-MM-DD");
    },
    setMonthlyConsumptionGoal: (state, action) => {
      state.assetByCategory.goal = action.payload;
    },
    setSavingDetailSetting: (state, action) => {
      state.savingDetailSetting = action.payload;
    },
    setAssetMenu: (state, action) => {
      state.assetMenu = action.payload;
    },
  },
});
export const {
  setSavingGoal,
  setPersonalGoal,
  setAssetsByCategory,
  setInitAssetsByCategory,
  setMonthlyConsumptionGoal,
  setSavingDetailSetting,
  setAssetMenu,
} = assetSlice.actions;

export const selectSavingGoal = (state: RootState) => state.asset.goal.saving;
export const selectPersonalGoal = (state: RootState) =>
  state.asset.goal.personal;
export const selectAssetsByCategory = (state: RootState) =>
  state.asset.assetByCategory.assets;
export const selectUpdateDate = (state: RootState) =>
  state.asset.assetByCategory.updateDate;
export const selectMonthlyConsumptionGoal = (state: RootState) =>
  state.asset.assetByCategory.goal;
export const selectSavingDetailSetting = (state: RootState) =>
  state.asset.savingDetailSetting;
export const selectSavingPopUpSetting = (state: RootState) =>
  state.asset.savingDetailSetting.popup;
export const selectAssetMenu = (state: RootState) => state.asset.assetMenu;

export default assetSlice.reducer;
