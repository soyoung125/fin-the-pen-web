import moment from "moment";
import { CATEGORIES, Category } from "../../../../constants/categories";
import { SCHEDULE_DRAWER } from "../../../../constants/schedule";
import { setDrawerSchedule } from "../../../../app/redux/slices/scheduleSlice";
import { Schedule } from "../../../../types/schedule";
import { Dispatch } from "redux";
import { UpdateStateInterface } from "../../../../types/common";
import { SelectChangeEvent } from "@mui/material/Select";

/**
 * index
 */

export const updateSchedule = (
  dispatch: Dispatch,
  schedule: Schedule | null,
  state:
    | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    | UpdateStateInterface,
) => {
  dispatch(
    setDrawerSchedule({ ...schedule, [state.target.id]: state.target.value }),
  );
  if (state.target.id === "start_time") {
    const endTime = moment(state.target.value as string, "HH:mm")
      .add(2, "hours")
      .format("HH:mm");
    dispatch(
      setDrawerSchedule({
        ...schedule,
        [state.target.id]: state.target.value,
        end_time: endTime,
      }),
    );
  }
  if (
    state.target.id === "start_date" &&
    moment(schedule?.end_date).isBefore(state.target.value as string)
  ) {
    dispatch(
      setDrawerSchedule({
        ...schedule,
        end_date: state.target.value,
        [state.target.id]: state.target.value,
      }),
    );
  }
  if (
    state.target.id === "end_date" &&
    moment(schedule?.start_date).isAfter(state.target.value as string)
  ) {
    dispatch(
      setDrawerSchedule({
        ...schedule,
        start_date: state.target.value,
        [state.target.id]: state.target.value,
      }),
    );
  }
};

export const updateAllDay = (
  dispatch: Dispatch,
  schedule: Schedule | null,
  state: { target: { value: boolean; name: string } },
) => {
  dispatch(
    setDrawerSchedule({
      ...schedule,
      [state.target.name]: state.target.value,
    }),
  );
};

export const updateRepeat = (
  dispatch: Dispatch,
  schedule: Schedule | null,
  state: { target: { value: string; name: string } },
) => {
  dispatch(
    setDrawerSchedule({
      ...schedule,
      [state.target.name]: state.target.value,
    }),
  );
};

export const updateRepeatEndDate = (
  schedule: Schedule | null,
  setRepeatEndDate: React.Dispatch<React.SetStateAction<moment.Moment>>,
  endDate: moment.Moment | null,
) => {
  if (endDate?.isBefore(schedule?.end_date)) {
    alert("반복 종료일을 다시 선택해주세요.");
  } else {
    endDate && setRepeatEndDate(endDate);
  }
};

export const updateSpendingType = (
  dispatch: Dispatch,
  schedule: Schedule | null,
) => {
  if (schedule?.price_type === SCHEDULE_DRAWER.type_plus) {
    dispatch(
      setDrawerSchedule({ ...schedule, type: SCHEDULE_DRAWER.type_minus }),
    );
  } else {
    dispatch(
      setDrawerSchedule({ ...schedule, type: SCHEDULE_DRAWER.type_plus }),
    );
  }
};

export const updateExclusion = (
  dispatch: Dispatch,
  schedule: Schedule | null,
  state: boolean,
) => {
  dispatch(setDrawerSchedule({ ...schedule, exclude: state }));
};

// 안쓰는 함수 같음
export const switchTitle = (id: string) => {
  switch (id) {
    case "start_time":
      return "일정 시작 시각";
    case "end_time":
      return "일정 종료 시각";
    default:
      return "error";
  }
};

/**
 * Footer
 */

/**
 * date를 주면, 해당 날짜에 랜덤한 일정을 만들어준다.
 * @param {*} date
 * @returns schedule
 */
export const generateRandomSchedule = (stringDate: string) => {
  const date = moment(stringDate);
  const generateRandomString = (num: number) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < num; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const importances = ["상", "중", "하"];
  const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  return {
    event_name: generateRandomString(5),
    start_date: date.format("YYYY-MM-DD"),
    end_date: date.format("YYYY-MM-DD"),
    start_time: `0${Math.floor(Math.random() * 9 + 1)}:00`,
    end_time: `2${Math.floor(Math.random() * 4)}:00`,
    category: category.title,
    all_day: false,
    repeat: "None",
    period: "None",
    price_type: getType(category),
    amount: Math.floor(Math.random() * 1000) * 100,
    is_fix_amount: false,
    importance: importances[Math.floor(Math.random() * 3)],
    exclude: Math.floor(Math.random() * 2) === 0,
  };
};

export const getType = (category: Category) => {
  const type = category.type;
  const nestedType = category.nestedType;
  if (type === "수입" || nestedType === "입금") {
    return SCHEDULE_DRAWER.type_plus;
  } else {
    return SCHEDULE_DRAWER.type_minus;
  }
};

export const getSign = (type: string) => (type === "+" ? "Plus" : "Minus");
