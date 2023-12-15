import moment from "moment";
import { CATEGORIES, Category } from "../../../../constants/categories";
import { SCHEDULE_DRAWER } from "../../../../constants/schedule";
import { setDrawerSchedule } from "../../../../app/redux/slices/scheduleSlice";
import { Schedule, ScheduleRepeat } from "../../../../types/schedule";
import { Dispatch } from "redux";
import { UpdateStateInterface } from "../../../../types/common";

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
  switch (state.target.id) {
    case "start_time": {
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
      break;
    }
    case "start_date": {
      const startDate = state.target.value as string;

      initRepeat(dispatch, schedule, startDate);
      break;
    }
    case "end_date":
      if (moment(schedule?.start_date).isAfter(state.target.value as string)) {
        dispatch(
          setDrawerSchedule({
            ...schedule,
            start_date: state.target.value,
            [state.target.id]: state.target.value,
          }),
        );
      } else {
        dispatch(
          setDrawerSchedule({
            ...schedule,
            [state.target.id]: state.target.value,
          }),
        );
      }
      break;
    default:
      dispatch(
        setDrawerSchedule({
          ...schedule,
          [state.target.id]: state.target.value,
        }),
      );
      break;
  }
};

const initRepeat = (
  dispatch: Dispatch,
  schedule: Schedule | null,
  startDate: string,
) => {
  const start = moment(startDate);
  const repeat = {
    ...schedule?.repeat,
    week_type: {
      ...schedule?.repeat.week_type,
      repeat_day_of_week: start.locale("en").format("dddd").toUpperCase(),
    },
    month_type: {
      ...schedule?.repeat.month_type,
      select_date: start.format("D"),
    },
    year_type: {
      ...schedule?.repeat.year_type,
      year_repeat: start.format("M월 D일"),
      year_category: "MonthAndDay",
    },
  };

  if (start.isAfter(schedule?.end_date)) {
    dispatch(
      setDrawerSchedule({
        ...schedule,
        end_date: startDate,
        start_date: startDate,
        repeat,
      }),
    );
  } else {
    dispatch(
      setDrawerSchedule({
        ...schedule,
        start_date: startDate,
        repeat,
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
  state: UpdateStateInterface,
) => {
  const { id, value } = state.target;
  if (id === "repeat") {
    dispatch(
      setDrawerSchedule({
        ...schedule,
        repeat: {
          ...schedule?.repeat,
          kind_type: value,
        },
      }),
    );
    return;
  }
  const type = schedule?.repeat.kind_type ?? "";
  if (type !== "") {
    const kind_type = `${type}_type` as const;
    const newValue = {
      ...schedule?.repeat[kind_type],
      [id]: value,
    };
    dispatch(
      setDrawerSchedule({
        ...schedule,
        repeat: {
          ...schedule?.repeat,
          [kind_type]: newValue,
        },
      }),
    );
  }
};

export const updateYearRepeat = (
  dispatch: Dispatch,
  schedule: Schedule | null,
  event: React.MouseEvent,
) => {
  const { id, textContent } = event.currentTarget;
  dispatch(
    setDrawerSchedule({
      ...schedule,
      repeat: {
        ...schedule?.repeat,
        year_type: {
          ...schedule?.repeat.year_type,
          year_category: id,
          year_repeat: textContent,
        },
      },
    }),
  );
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
    repeat: getInitRepeat(date),
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

export const getInitRepeat = (date: moment.Moment): ScheduleRepeat => {
  return {
    day_type: {
      repeat_value: "1",
    },
    week_type: {
      repeat_day_of_week: date.locale("en").format("dddd").toUpperCase(),
      repeat_value: "1",
    },
    month_type: {
      today_repeat: true,
      select_date: date.format("D"),
      repeat_value: "1",
    },
    year_type: {
      year_repeat: date.format("M월 D일"),
      repeat_value: "1",
      year_category: "MonthAndDay",
    },
    kind_type: "",
  };
};
