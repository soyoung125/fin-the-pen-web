import { atom, selector } from "recoil";

/**
 *  하단 바 활성화 번호
 */
export const bottomTabMenuState = atom<number>({
  key: "bottomTabMenu",
  default: 0,
});

export const bottomTabMenuRepository = selector({
  key: "bottomTabMenuRepository",
  get: ({ getCallback }) => {
    const openBottomTabMenu = getCallback(({ set }) => (newTabNumber:number) => {
      set(bottomTabMenuState, newTabNumber);
    });

    return {
      openBottomTabMenu,
    };
  },
});
