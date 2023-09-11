import { atom, selector } from "recoil";

/**
 *  하단 일정 등록 서랍 on/off
 */
export const bottomDrawerOpenState = atom<boolean>({
  key: "bottomDrawerOpen",
  default: false,
});

export const bottomDrawerOpenRepository = selector({
  key: "bottomDrawerOpenRepository",
  get: ({ getCallback }) => {
    const openBottomDrawer = getCallback(({ set }) => () => {
      set(bottomDrawerOpenState, true);
    });

    const closeBottomDrawer = getCallback(({ set }) => () => {
      set(bottomDrawerOpenState, false);
    });

    return {
      openBottomDrawer,
      closeBottomDrawer,
    };
  },
});
