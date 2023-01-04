/* eslint-disable no-promise-executor-return */
/* eslint-disable import/prefer-default-export */
// A mock function to mimic making an async request for data
export function fetchMockLogin() {
  return new Promise((resolve) => setTimeout(() => resolve({
    data: {
      id: 'guest',
      user_id: 'guest',
      name: 'guest',
      password: '',
      bday: '2000-01-01',
      account_number: '123456789',
    },
  }), 2000));
}
