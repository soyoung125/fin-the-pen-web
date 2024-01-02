import { PickersDayProps } from "@mui/x-date-pickers";
import React from "react";

export type MUIColor = "success" | "secondary" | "info" | "warning" | "error";

export interface RouterDOM {
  path: string;
  element: React.ReactNode;
}

export const HEADER_MODE = {
  analysis: "analysis",
  home: "home",
  settings: "settings",
  sign: "sign",
  search: "search",
  assetManagement: "assetManagement",
} as const;

export type HeaderModeType = (typeof HEADER_MODE)[keyof typeof HEADER_MODE];

export type AsyncThunkStatusValue = AsyncThunkStatus[keyof AsyncThunkStatus];

export interface AsyncThunkStatus {
  pending: "loading";
  fulfilled: "idle";
  failed: "failed";
}

export interface AnalysisData {
  id: string;
  label: string;
  nestedType: string;
  value: number;
  color: string;
}

export interface AssetCategories {
  title: string;
  asset: "-" | number;
}

export interface AssetsByCategoryInterface {
  type: string;
  categories: AssetCategories[];
  color: string;
  total: "-" | number;
  sum: number;
}

// 저축 세부 설정
export interface RemittanceInterface {
  isOn: boolean;
  settings: {
    bankName: string;
    accountNumber: string;
    date: string; // "none" | "매달 1일" | "매달 15일" | "매달 마지막날" | "직접 설정"
    amount: number;
  };
}

export interface NotificationInterface {
  isOn: boolean;
  time: string;
}

export interface PopupInterface {
  isOn: boolean;
  settings: {
    display: "none(아이콘)" | "저축금액(퍼센트)";
    connect: "저축 목표 설정 페이지" | "적금 계좌 APP";
  };
}

export interface RenderDayFunction {
  (
    day: moment.Moment,
    _value: moment.Moment[],
    DayComponentProps: PickersDayProps<moment.Moment>
  ): JSX.Element;
}

export interface UpdateStateInterface {
  target: { id: string; value: string | boolean };
}

export type ServerState = "real" | "guest";

export interface OrganizationInterface {
  name: string;
  value: string;
  icon: any;
  limit: number | string;
}

export type HeaderTitleType =
  | ""
  | "설정"
  | "마이데이터"
  | "자산연결"
  | "자산조회";
