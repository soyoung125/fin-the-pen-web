// src/mocks/handlers.js
import { rest } from "msw";
import { LOCAL_STORAGE_KEY_USERS } from "../app/api/keys.ts";
import {
  getLocalStorage,
  getSessionStorage,
  setLocalStorage,
  setSessionStorage,
} from "../app/utils/storage.ts";
import { Todo } from "../temp/type.ts";
import { DOMAIN } from "@api/url.ts";
import { MockUser, SignUp, User } from "@type/auth.tsx";

export const handlers = [
  rest.get("/hello", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),

  rest.post(`${DOMAIN}/fin-the-pen-web/sign-up`, async (req, res, ctx) => {
    type MockUser = User & { password: string };

    const newUser: MockUser = await req.json();
    const prevUsers = getLocalStorage<MockUser[]>(LOCAL_STORAGE_KEY_USERS, []);

    if (prevUsers.find((user) => user.user_id === newUser.user_id)) {
      return res(ctx.delay(1000), ctx.status(200), ctx.json(false));
    }

    const newUsers: MockUser[] = [...prevUsers, newUser];

    setLocalStorage(LOCAL_STORAGE_KEY_USERS, newUsers);

    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),

  rest.post(`${DOMAIN}/fin-the-pen-web/sign-in`, async (req, res, ctx) => {
    const credentials: SignUp = await req.json();
    const users = getLocalStorage<MockUser[]>(LOCAL_STORAGE_KEY_USERS, []);
    const user = users.find(
      (user) =>
        user.user_id === credentials.user_id &&
        user.password === credentials.password
    );
    if (user === undefined) {
      return res(ctx.delay(1000), ctx.status(200), ctx.json(""));
    }
    return res(ctx.delay(1000), ctx.status(200), ctx.json(user));
  }),

  // test
  rest.get("/temp/todo", (req, res, ctx) => {
    const todoList = getSessionStorage<Todo[]>("todo", []);
    return res(ctx.delay(200), ctx.json(todoList));
  }),

  rest.post("/temp/todo/create", async (req, res, ctx) => {
    const body: {
      text: string;
    } = await req.json();

    const { text } = body;

    const prevTodoList = getSessionStorage<Todo[]>("todo", []);
    setSessionStorage<Todo[]>("todo", [
      ...prevTodoList,
      {
        id: prevTodoList.length,
        text: text,
      },
    ]);

    return res(ctx.delay(200), ctx.json(true));
  }),
];
