/* eslint-disable no-promise-executor-return */

/**
 * TODO: MSW로 이전하기
 */
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
