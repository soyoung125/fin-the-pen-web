import { atom } from "recoil";

import { User } from "@type/auth.tsx";

/**
 *  회원 정보
 */
export const userState = atom<User | undefined>({
  key: "userState",
  default: undefined,
});
