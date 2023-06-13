// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("/hello", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),
  rest.post("/fin-the-pen-web/sign-up", (req, res, ctx) => {
    alert(`url /fin-the-pen-web/sign-up mocked!! : ${JSON.stringify(req)}`);
    /**
     * TODO: 실제로 회원가입이 된 것 처럼 로컬스토리지 혹은 세션 스토리지에 무언가 등록하기
     */
    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),
];
