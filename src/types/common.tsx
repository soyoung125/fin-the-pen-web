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
