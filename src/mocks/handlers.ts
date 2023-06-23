// src/mocks/handlers.js
import { rest } from "msw";
import { MockUser, SignUp, User } from "../types/common.tsx";
import { LOCAL_STORAGE_KEY_USERS } from "../app/api/keys.ts";
import { getLocalStorage, setLocalStorage } from "../app/utils/storage.ts";

export const handlers = [
  rest.get("/hello", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),

  rest.post("/fin-the-pen-web/sign-up", (req, res, ctx) => {
    const prevUsers = getLocalStorage<MockUser[]>(
      LOCAL_STORAGE_KEY_USERS,
      []
    ) as MockUser[];

    const newSignUp = req.body as SignUp;
    const newUser: MockUser = {
      id: prevUsers.length,
      user_id: newSignUp.user_id as string,
      name: newSignUp.name as string,
      bday: "2023-01-01",
      registerDate: "2023-01-01",
      phone_number: newSignUp.phone_number as string,
      password: newSignUp.password as string,
    };
    const newUsers: MockUser[] = [...prevUsers, newUser];
    setLocalStorage(LOCAL_STORAGE_KEY_USERS, newUsers);

    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),

  rest.post("/fin-the-pen-web/sign-in", (req, res, ctx) => {
    const newUser = req.body as User;
    const prevUsers = getLocalStorage<User[]>(
      LOCAL_STORAGE_KEY_USERS,
      []
    ) as User[];
    const newUsers: User[] = [...prevUsers, newUser];
    setLocalStorage(LOCAL_STORAGE_KEY_USERS, newUsers);

    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),

  rest.post("/mock/login", (req, res, ctx) => {
    const mockUser: User = {
      id: 0,
      user_id: "guest@finthepen.com",
      name: "guest by msw",
      bday: "2000-01-01",
      registerDate: "2023-01-25T14:57:08.023+00:00",
      phone_number: "010-4413-5698",
    };
    return res(ctx.delay(1000), ctx.status(200), ctx.json(mockUser));
  }),
];
