import { atom, selector } from "recoil";
import { sessionStorageEffect } from "@utils/storageEffect.ts";

/**
 *  하단 바 활성화 번호
 */
export const bottomTabMenuState = atom<number>({
  key: "bottomTabMenu",
  default: 0,
  effects: [sessionStorageEffect<number>("bottomTabMenu")],
});

export const bottomBarOpenState = atom<boolean>({
  key: "bottomBarOpenState",
  default: true,
});

export const bottomTabMenuRepository = selector({
  key: "bottomTabMenuRepository",
  get: ({ getCallback }) => {
    const openBottomTabMenu = getCallback(
      ({ set }) =>
        (newTabNumber: number) => {
          set(bottomTabMenuState, newTabNumber);
        }
    );

    const openBottomBar = getCallback(({ set }) => () => {
      set(bottomBarOpenState, true);
    });

    const closeBottomBar = getCallback(({ set }) => () => {
      set(bottomBarOpenState, false);
    });

    return {
      openBottomTabMenu,
      openBottomBar,
      closeBottomBar,
    };
  },
});
