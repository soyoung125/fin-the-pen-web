// src/mocks/handlers.js
import { rest } from "msw";
import {
  LOCAL_STORAGE_KEY_SCHEDULES,
  LOCAL_STORAGE_KEY_USERS,
} from "@api/keys.ts";
import { getLocalStorage, setLocalStorage } from "@utils/storage.ts";
import { DOMAIN } from "@api/url.ts";
import { MockUser, SignUp, User } from "@type/auth.tsx";
import { Schedule } from "@type/schedule.tsx";
import moment from "moment";

export const handlers = [
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

  rest.post(`${DOMAIN}/createSchedule`, async (req, res, ctx) => {
    const schedule = await req.json();
    const prevSchedules = getLocalStorage<Schedule[]>(
      LOCAL_STORAGE_KEY_SCHEDULES,
      []
    );
    const newSchedules: Schedule[] = [...prevSchedules, schedule];
    setLocalStorage(LOCAL_STORAGE_KEY_SCHEDULES, newSchedules);
    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),

  rest.post(`${DOMAIN}/getMonthSchedules`, async (req, res, ctx) => {
    const { user_id, date } = await req.json();
    console.log(user_id, date);
    const schedules = getLocalStorage<Schedule[]>(
      LOCAL_STORAGE_KEY_SCHEDULES,
      []
    );
    const monthSchedules = schedules.filter(
      (schedule) =>
        schedule.user_id === user_id &&
        moment(date).isSame(schedule.start_date, "month")
    );
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({ data: monthSchedules })
    );
  }),

  rest.post(`${DOMAIN}/deleteSchedule`, async (req, res, ctx) => {
    const { id } = await req.json();
    const prevSchedules = getLocalStorage<Schedule[]>(
      LOCAL_STORAGE_KEY_SCHEDULES,
      []
    );
    const newSchedules = prevSchedules.filter((schedule) => schedule.id !== id);
    setLocalStorage(LOCAL_STORAGE_KEY_SCHEDULES, newSchedules);
    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),
];
