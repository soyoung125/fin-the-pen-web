import React from 'react';

export type MUIColor = 'success' | 'secondary' | 'info' | 'warning' | 'error';
export interface Route {
  path: string;
  element: React.ReactNode
}
