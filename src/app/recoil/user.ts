import { atom } from "recoil";

import { User } from "@type/auth.tsx";
import { sessionStorageEffect } from "@utils/storageEffect.ts";

/**
 *  회원 정보
 */
export const userState = atom<User | undefined>({
  key: "userState",
  default: undefined,
  effects: [sessionStorageEffect<User | undefined>("userState")],
});
