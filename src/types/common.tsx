import React from 'react';

export type MUIColor = 'success' | 'secondary' | 'info' | 'warning' | 'error';
export interface RouterDOM {
  path: string;
  element: React.ReactNode
}
export type HeaderMode = 'analysis' | 'home';
