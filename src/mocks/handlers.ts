// src/mocks/handlers.js
import { rest } from "msw";
import {
  LOCAL_STORAGE_KEY_SCHEDULES,
  LOCAL_STORAGE_KEY_USERS,
} from "@api/keys.ts";
import { getLocalStorage, setLocalStorage } from "@utils/storage.ts";
import { DOMAIN } from "@api/url.ts";
import { MockUser, SignUp, User } from "@app/types/auth.ts";
import { Schedule } from "@app/types/schedule.ts";
import moment from "moment";

const getSign = (type: string) => (type === "Plus" ? "+" : "-");

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

    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({ ...user, token: randomEightDigit })
    );
  }),

  rest.post(`${DOMAIN}/createSchedule`, async (req, res, ctx) => {
    const schedule = await req.json();
    const prevSchedules = getLocalStorage<Schedule[]>(
      LOCAL_STORAGE_KEY_SCHEDULES,
      []
    );
    const isExist = prevSchedules.find((s) => s.id === schedule.id);
    if (isExist) {
      return res(ctx.delay(1000), ctx.status(500), ctx.json(false));
    }
    const newSchedules: Schedule[] = [
      ...prevSchedules,
      { ...schedule, price_type: getSign(schedule.price_type) },
    ];
    setLocalStorage(LOCAL_STORAGE_KEY_SCHEDULES, newSchedules);
    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),

  rest.post(`${DOMAIN}/getMonthSchedules`, async (req, res, ctx) => {
    const { user_id, date } = await req.json();

    const schedules = getLocalStorage<Schedule[]>(
      LOCAL_STORAGE_KEY_SCHEDULES,
      []
    );
    const monthSchedules = schedules.filter(
      (schedule) =>
        schedule.user_id === user_id &&
        moment(date).isSame(schedule.start_date, "month")
    );
    if (monthSchedules.length === 0) {
      return res(
        ctx.delay(1000),
        ctx.status(200),
        ctx.json({ data: undefined })
      );
    }
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

  rest.post(`${DOMAIN}/modifySchedule`, async (req, res, ctx) => {
    const schedule = await req.json();

    const prevSchedules = getLocalStorage<Schedule[]>(
      LOCAL_STORAGE_KEY_SCHEDULES,
      []
    );
    const newSchedules = prevSchedules.map((s) =>
      s.id === schedule.schedule_id
        ? {
            ...schedule,
            price_type: getSign(schedule.price_type),
          }
        : s
    );
    setLocalStorage(LOCAL_STORAGE_KEY_SCHEDULES, newSchedules);
    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),

  rest.post(`${DOMAIN}/report/home`, async (req, res, ctx) => {
    const { user_id, date } = await req.json();
    const schedules = getLocalStorage<Schedule[]>(
      LOCAL_STORAGE_KEY_SCHEDULES,
      []
    );
    const monthSchedules = schedules.filter(
      (schedule) =>
        schedule.user_id === user_id &&
        moment(date).isSame(schedule.start_date, "month")
    );

    if (monthSchedules.length === 0) {
      return res(ctx.delay(1000), ctx.status(200), ctx.json({ data: null }));
    }

    const data = {
      date: "2024-02-02",
      totalSpentToday: "3330000000", // 총 지출 금액
      expenseGoalAmount: "1200000", // 지출 목표
      availableAmount: "579000", //사용 가능 금액
      category_consume_report: "0", // 카테고리 소비
      expenditure_this_month: {
        // 이번달 소비?
        last_month_Amount: "0",
        "1st_month_Amount": "0",
        goal_amount: "0",
        result_amount: "0",
      },
      Nmonth_fixed: {
        // 고정 입출금
        previous_diff_plus: "200000", // 수입 차이
        fixed_deposit: "1200000", // 고정 입금
        fixed_withdraw: "579000", // 고정 출금
        previous_diff_minus: "200000", // 출금 차이
        current_month: "2024-02-02", // 이달
        previous_month: "2024-01-02", // 전달
      },
      month_report: {
        // 월별 소비 리포트
        current: "500000", // 이달 소비
        second_previous: "400000", // 지난 달 소비
        previous: "300000", // 두달 전 소비
      },
    };
    return res(ctx.delay(1000), ctx.status(200), ctx.json({ data: data }));
  }),

  rest.post(`${DOMAIN}/report/inquiry`, async (req, res, ctx) => {
    const { user_id, date } = await req.json();
    const schedules = getLocalStorage<Schedule[]>(
      LOCAL_STORAGE_KEY_SCHEDULES,
      []
    );
    const monthSchedules = schedules.filter(
      (schedule) =>
        schedule.user_id === user_id &&
        moment(date).isSame(schedule.start_date, "month")
    );

    if (monthSchedules.length === 0) {
      return res(ctx.delay(1000), ctx.status(200), ctx.json({ data: [] }));
    }

    const data = [
      {
        amount: 20000,
        rate: "20",
        category: "식비",
      },
      {
        amount: 12000,
        rate: "12",
        category: "미용",
      },
      {
        amount: 8000,
        rate: "8",
        category: "자동차",
      },
      {
        amount: 7000,
        rate: "7",
        category: "패션/쇼핑",
      },
      {
        amount: 6000,
        rate: "6",
        category: "카페",
      },
      {
        amount: 5000,
        rate: "5",
        category: "식비",
      },
      {
        amount: 4000,
        rate: "4",
        category: "식비",
      },
    ];
    return res(ctx.delay(1000), ctx.status(200), ctx.json({ data: data }));
  }),
];
