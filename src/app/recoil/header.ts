/**
 * header의 상태를 결정한다.
 */
import {atom, selector} from "recoil";

export const HEADER_MODE = {
  analysis: 'analysis',
  home: 'home',
  settings: 'settings',
  sign: 'sign',
  search: 'search',
  assetManagement: 'assetManagement',
} as const;

export type HeaderModeType = typeof HEADER_MODE[keyof typeof HEADER_MODE];

export const headerOpenState = atom<boolean>({
  key: "headerOpenState",
  default: true
});

export const headerModeState = atom<HeaderModeType>({
  key: "headerModeState",
  default: HEADER_MODE.home
});

export const headerBackActionState = atom<() => void>({
  key: "headerBackActionState",
  default: () => {},
});

export const headerTitleState = atom<string>({
  key: "headerTitleState",
  default: "",
});

export const headerRepository = selector({
  key: "headerRepository",
  get: ({getCallback}) => {
    const openHeader = getCallback(({set}) => (mode: HeaderModeType | undefined) => {
      if (mode !== undefined) {
        set(headerModeState, mode);
      }
      set(headerOpenState, true);
    });

    const closeHeader = getCallback(({set}) => () => {
      set(headerOpenState, false);
    });

    const changeBackAction = getCallback(({set}) => (action: () => void) => {
      set(headerBackActionState, action);
    });

    const changeHeaderTitle = getCallback(({set}) => (title: string) => {
      set(headerTitleState, title);
    });

    return {
      openHeader,
      closeHeader,
      changeBackAction,
      changeHeaderTitle
    }
  }
})
