// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("/hello", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(true));
  }),
];
