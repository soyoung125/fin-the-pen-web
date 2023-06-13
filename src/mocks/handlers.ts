// src/mocks/handlers.js
import { rest } from "msw";
import { User } from "../types/common.tsx";
import { LOCAL_STORAGE_KEY_USERS } from "../app/api/keys.ts";
import { getLocalStorage, setLocalStorage } from "../app/utils/storage.ts";

export const handlers = [
  rest.get("/hello", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),

  rest.post("/fin-the-pen-web/sign-up", (req, res, ctx) => {
    /**
     * TODO: 실제로 회원가입이 된 것 처럼 로컬스토리지 혹은 세션 스토리지에 무언가 등록하기
     */

    const newUser = req.body as User;
    const prevUsers = getLocalStorage<User[]>(
      LOCAL_STORAGE_KEY_USERS,
      []
    ) as User[];
    const newUsers: User[] = [...prevUsers, newUser];
    setLocalStorage(LOCAL_STORAGE_KEY_USERS, newUsers);

    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),
];
