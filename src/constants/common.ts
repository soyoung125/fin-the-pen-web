import { AsyncThunkStatus } from "@app/types/common.ts";

export const ASYNC_THUNK_STATUS: AsyncThunkStatus = {
  pending: "loading",
  fulfilled: "idle",
  failed: "failed",
};
