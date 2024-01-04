// src/mocks/handlers.js
import { rest } from "msw";
import {
  LOCAL_STORAGE_KEY_SCHEDULES,
  LOCAL_STORAGE_KEY_USERS, SESSION_STORAGE_KEY_TOKEN,
} from "@api/keys.ts";
import {getLocalStorage, setLocalStorage, setSessionStorage} from "@utils/storage.ts";
import { DOMAIN } from "@api/url.ts";
import { MockUser, SignUp, User } from "@app/types/auth.ts";
import { Schedule } from "@app/types/schedule.ts";
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

    const randomEightDigit = Math.floor(
        10000000 + Math.random() * 90000000
    ).toString();

    return res(ctx.delay(1000), ctx.status(200), ctx.json({...user, token: randomEightDigit}));
  }),

  rest.post(`${DOMAIN}/createSchedule`, async (req, res, ctx) => {
    const schedule = await req.json();
    const prevSchedules = getLocalStorage<Schedule[]>(
      LOCAL_STORAGE_KEY_SCHEDULES,
      []
    );
    const isExist = prevSchedules.find(s => s.id === schedule.id);
    if (isExist) {
      return res(ctx.delay(1000), ctx.status(500), ctx.json(false));
    }
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
