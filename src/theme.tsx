/* eslint-disable no-unused-vars */
import { ThemeOptions } from '@mui/material/styles';

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#735bf2',
      light: 'rgba(143,123,244,0.57)',
    },
    secondary: {
      main: '#bfbaf3',
    },
    error: {
      main: '#ffea00',
    },
    warning: {
      main: '#ff5252',
    },
    success: {
      main: '#b9f6ca',
    },
    text: {
      primary: '#000000',
    },
  },
};

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#735bf2',
      light: 'rgba(143,123,244,0.57)',
    },
    secondary: {
      main: '#bfbaf3',
    },
    error: {
      main: '#ffea00',
    },
    warning: {
      main: '#ff5252',
    },
    success: {
      main: '#b9f6ca',
    },
    text: {
      primary: '#ffffff',
    },
    divider: '#c8c1ef',
  },
};
