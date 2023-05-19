/* eslint-disable no-promise-executor-return */
/* eslint-disable import/prefer-default-export */

/**
 * TODO: MSW로 이전하기
 */

// A mock function to mimic making an async request for data
export function fetchMockLogin() {
  return new Promise<any>((resolve) => setTimeout(() => resolve({
    data: {
      id: 0,
      user_id: 'guest@finthepen.com',
      name: 'guest',
      bday: '2000-01-01',
      registerDate: '2023-01-25T14:57:08.023+00:00',
      phone_number: '010-4413-5698',
    },
  }), 1000));
}

export function fetchMockCreateSchedule(scheduleWithUuid: any) {
  return new Promise<any>((resolve) => setTimeout(() => resolve({
    data: scheduleWithUuid,
  }), 500));
}

export function fetchMockDeleteSchedule(id: any) {
  return new Promise<any>((resolve) => setTimeout(() => resolve({
    data: id,
  }), 500));
}
