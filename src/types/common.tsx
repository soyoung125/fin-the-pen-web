import { PickersDayProps } from "@mui/x-date-pickers";
import React from "react";

export type MUIColor = "success" | "secondary" | "info" | "warning" | "error";

export interface RouterDOM {
  path: string;
  element: React.ReactNode;
}

export type HeaderModeValue = HeaderMode[keyof HeaderMode];

export interface HeaderMode {
  analysis: "analysis";
  home: "home";
}

export type AsyncThunkStatusValue = AsyncThunkStatus[keyof AsyncThunkStatus];

export interface AsyncThunkStatus {
  pending: "loading";
  fulfilled: "idle";
  failed: "failed";
}

export interface User {
  id: number;
  user_id: string;
  name: string;
  bday: string;
  registerDate: string;
  phone_number: string;
}

export interface MockUser extends User {
  password: string;
}

export interface SignUp {
  user_id: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  name: FormDataEntryValue | null;
  phone_number: FormDataEntryValue | null;
}

export interface SignInterface {
  user_id: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
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
  total: string | number;
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
