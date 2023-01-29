/* eslint-disable import/prefer-default-export */

/**
 * 유용한 함수들을 모아두는 곳.
 * 주석으로 부가 설명이 있으면 더 좋을 것 같아요.
 */

/**
 * isObjectValuesEmpty(obj)
 * 어떤 객체의 value 를 전수조사하여, 빈칸 '' 이 검출되지 않으면 -1을 반환하는 함수.
 * 즉, -1이 반환되면 이 객체에 빈칸이 없다는 의미이다.
 */
export const isObjectValuesEmpty = (obj) => (
  Object.values(obj).findIndex((v) => v === '')
);

/**
  * 수입, 지출액을 계산하기 위한 함수
  * @param {Moment} renderDay 수입, 지출액을 계산할 기준일
  * @param {String} unit 'day', 'week' 같은 날/주를 확인하기 위한 단위
  * @param {Sting} type '-', '+' 수입/지출을 확인하기 위한 매개변수
  * @returns 일/주별 수입/지출 액
  */
export const calculateIncomeExpenditure = (schedules, renderDay, unit, type) => {
  let result = 0;
  if (type === '-') {
    result = schedules.filter((s) => renderDay.isSame(s.date, unit))
      .reduce((sum, current) => (
        current.type === type
          ? sum - parseInt(current.expected_spending, 10)
          : sum
      ), result);
  } else {
    result = schedules.filter((s) => renderDay.isSame(s.date, unit))
      .reduce((sum, current) => (
        current.type === type
          ? sum + parseInt(current.expected_spending, 10)
          : sum
      ), result);
  }
  return result !== 0 ? result : null;
};
