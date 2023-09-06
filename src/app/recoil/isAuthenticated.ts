import { atom, selector } from "recoil";

/**
 *  간편 인증 페이지 on/off
 */
export const isAuthenticatedState = atom<boolean>({
  key: "isAuthenticated",
  default: true,
});

export const isAuthenticatedRepository = selector({
  key: "isAuthenticatedRepository",
  get: ({ getCallback }) => {
    const setIsAuthenticatedTrue = getCallback(({ set }) => () => {
      set(isAuthenticatedState, true);
    });

    const setIsAuthenticatedFalse = getCallback(({ set }) => () => {
      set(isAuthenticatedState, false);
    });

    return {
      setIsAuthenticatedTrue,
      setIsAuthenticatedFalse,
    };
  },
});
