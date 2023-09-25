import { AsyncThunkStatus } from "@type/common.tsx";

export const ASYNC_THUNK_STATUS: AsyncThunkStatus = {
  pending: "loading",
  fulfilled: "idle",
  failed: "failed",
};
