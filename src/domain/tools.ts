/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/naming-convention */

import { EXPENDITURE } from "./constants/categories";
import { deleteSchedule } from "../app/redux/slices/scheduleSlice";
import { Schedule } from "../types/schedule";
import { AppDispatch } from "../app/redux/store";

/**
 * 유용한 함수들을 모아두는 곳.
 * 주석으로 부가 설명이 있으면 더 좋을 것 같아요.
 */

/**
 * isObjectValuesEmpty(obj)
 * 어떤 객체의 value 를 전수조사하여, 빈칸 '' 이 검출되지 않으면 -1을 반환하는 함수.
 * 즉, -1이 반환되면 이 객체의 value에 빈칸이 없다는 의미이다.
 */
export const isObjectValuesEmpty = (obj: object) =>
  Object.values(obj).findIndex((v) => v === "");


/**
 * 수입, 지출액을 계산하기 위한 함수
 * @param {function} expression 수입/지출액을 계산하는 수식
 * @param {Sting} type '-', '+' 수입/지출을 확인하기 위한 매개변수
 * @returns 일/주/월별 수입/지출 액
 */
export const calculateIncomeExpenditure = (
  schedules: Schedule[],
  expression: (s: Schedule) => boolean,
  type: '+' | '-'
) => {
  let result = 0;
  if (type === "-") {
    result = schedules
      .filter((s: Schedule) => expression(s))
      .reduce(
        (sum: number, current: Schedule) =>
          current.type === type
            ? sum - parseInt(current.expected_spending, 10)
            : sum,
        result
      );
  } else {
    result = schedules
      .filter((s: Schedule) => expression(s))
      .reduce(
        (sum: number, current: Schedule) =>
          current.type === type
            ? sum + parseInt(current.expected_spending, 10)
            : sum,
        result
      );
  }
  return Math.abs(result).toLocaleString("ko-KR");
};

/**
 * 시작 시각이 종료 시각보다 빠른지 검사하는 함수.
 * 알파벳 순으로 검사하므로 시각('HH:MM'), 날짜('YYYY.MM.DD')를 범용 지원한다.
 */
export const isTimeOrderCorrect = (startTime: string, endTime: string) =>
  startTime <= endTime;

export const deleteSelectedSchedule = (
  dispatch: AppDispatch,
  schedule: Schedule | null,
  handleClose: () => void,
) => {
  if (window.confirm("정말로 삭제 하시겠습니까?")) {
    console.log(schedule?.id);
    dispatch(deleteSchedule(schedule?.id || ''));
    handleClose();
  }
};

export const initAssetsByCategory = () =>
  EXPENDITURE.nested.map((category) => ({
    ...category,
    categories: category.categories.map((c) => ({
      title: c,
      asset: "-" as const,
    })),
    total: "-",
    sum: 0,
  }));

export const makeGroupForRegularData = (data: Schedule[]) =>
  data.reduce((acc: { [type: string]: Schedule[] }, curr: Schedule) => {
    const { event_name } = curr;
    if (acc[event_name]) acc[event_name].push(curr);
    else acc[event_name] = [curr];
    return acc;
  }, {});
