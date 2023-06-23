/* eslint-disable no-promise-executor-return */

import { Schedule } from "../../types/schedule";

/**
 * TODO: MSW로 이전하기
 */

export function fetchMockCreateSchedule(scheduleWithUuid: Schedule) {
  return new Promise<any>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: scheduleWithUuid,
        }),
      500
    )
  );
}

export function fetchMockDeleteSchedule(id: string) {
  return new Promise<any>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: id,
        }),
      500
    )
  );
}
