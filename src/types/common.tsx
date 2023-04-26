import React from 'react';

export type MUIColor = 'success' | 'secondary' | 'info' | 'warning' | 'error';
export interface RouterDOM {
  path: string;
  element: React.ReactNode
}
export type HeaderModeValue = HeaderMode[keyof HeaderMode];
export interface HeaderMode {
  analysis: 'analysis';
  home: 'home';
}

export type AsyncThunkStatusValue = AsyncThunkStatus[keyof AsyncThunkStatus];
export interface AsyncThunkStatus {
  pending: 'loading';
  fulfilled: 'idle';
}

export interface User {
  id: number;
  user_id: string;
  name: string;
  bday: string;
  registerDate: string;
  phone_number: string;
}

export interface AnalysisData {
  id: string;
  label: string;
  nestedType: string;
  value: number;
  color: string;
}
