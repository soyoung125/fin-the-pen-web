import { UpdateStateInterface } from "@app/types/common.ts";
import {
  selectScheduleForm,
  setDrawerScheduleForm,
} from "@redux/slices/scheduleSlice.tsx";
import moment from "moment/moment";
// import { CATEGORIES, Category } from "@constants.ts/categories.ts";
import {
  INIT_PERIOD,
  INIT_REPEAT,
  SCHEDULE_DRAWER,
} from "@constants/schedule.ts";
import { useAppDispatch } from "@redux/hooks.ts";
import { useSelector } from "react-redux";
import {
  CATEGORIES,
  INCOME_CATEGORY,
} from "@components/ScheduleDrawer/pages/ScheduleFormPage/components/CategoryPicker/constants.ts";

export const getType = (category: string) => {
  if (INCOME_CATEGORY.includes(category)) {
    return SCHEDULE_DRAWER.type_plus;
  } else {
    return SCHEDULE_DRAWER.type_minus;
  }
};

export const getPriceType = (type: string) => (type === "+" ? "Plus" : "Minus");
export const getPriceTypeSign = (type: string) => {
  if (type === "Plus") return "+";
  else if (type === "Minus") return "-";
  return type;
};

const getRepeatEndDate = (
  startDate: string | undefined,
  type: string | undefined
) => {
  let date = moment(startDate);
  switch (type) {
    case "day": {
      date = date.add(1, "w");
      break;
    }
    case "week": {
      date = date.add(1, "M");
      break;
    }
    case "month": {
      date = date.add(1, "y");
      break;
    }
    case "year": {
      date = date.add(10, "y");
      break;
    }
    default:
      break;
  }
  return date.format("YYYY-MM-DD");
};

export const useScheduleForm = () => {
  const dispatch = useAppDispatch();
  const scheduleForm = useSelector(selectScheduleForm);

  const setRandomGeneratedSchedule = (stringDate: string) => {
    const date = moment(stringDate);
    const generateRandomString = (num: number) => {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < num; i += 1) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };
    const importances = ["상", "중", "하"];
    const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
    const randomSchedule = {
      event_name: generateRandomString(5),
      start_date: date.format("YYYY-MM-DD"),
      end_date: date.format("YYYY-MM-DD"),
      start_time: `0${Math.floor(Math.random() * 9 + 1)}:00`,
      end_time: `2${Math.floor(Math.random() * 4)}:00`,
      category: category,
      is_all_day: false,
      repeat: INIT_REPEAT(date),
      period: INIT_PERIOD(date),
      price_type: getType(category),
      set_amount: Math.floor(Math.random() * 1000) * 100,
      fix_amount: false,
      importance: importances[Math.floor(Math.random() * 3)],
      exclusion: Math.floor(Math.random() * 2) === 0,
    };
    dispatch(setDrawerScheduleForm(randomSchedule));
  };

  const updateSchedule = (
    state:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | UpdateStateInterface
  ) => {
    switch (state.target.id) {
      case "start_time": {
        const endTime = moment(state.target.value as string, "HH:mm")
          .add(2, "hours")
          .format("HH:mm");
        dispatch(
          setDrawerScheduleForm({
            ...scheduleForm,
            [state.target.id]: state.target.value,
            end_time: endTime,
          })
        );
        break;
      }
      case "start_date": {
        const startDate = state.target.value as string;

        initRepeat(startDate);
        break;
      }
      case "end_date":
        if (
          moment(scheduleForm?.start_date).isAfter(state.target.value as string)
        ) {
          dispatch(
            setDrawerScheduleForm({
              ...scheduleForm,
              start_date: state.target.value,
              [state.target.id]: state.target.value,
            })
          );
        } else {
          dispatch(
            setDrawerScheduleForm({
              ...scheduleForm,
              [state.target.id]: state.target.value,
            })
          );
        }
        break;
      default:
        dispatch(
          setDrawerScheduleForm({
            ...scheduleForm,
            [state.target.id]: state.target.value,
          })
        );
        break;
    }
  };

  const initRepeat = (startDate: string) => {
    const start = moment(startDate);
    const repeat = {
      ...scheduleForm?.repeat,
      week_type: {
        ...scheduleForm?.repeat.week_type,
        repeat_day_of_week: start.locale("en").format("dddd").toUpperCase(),
      },
      month_type: {
        ...scheduleForm?.repeat.month_type,
        select_date: start.format("D"),
      },
      year_type: {
        ...scheduleForm?.repeat.year_type,
        year_repeat: start.format("M월 D일"),
        year_category: "MonthAndDay",
      },
    };
    const period = {
      ...scheduleForm?.period,
      repeat_end_line: getRepeatEndDate(
        startDate,
        scheduleForm?.repeat.kind_type
      ),
    };

    dispatch(
      setDrawerScheduleForm({
        ...scheduleForm,
        end_date: startDate,
        start_date: startDate,
        repeat,
        period,
      })
    );
  };

  const updateAllDay = (state: {
    target: { value: boolean; name: string };
  }) => {
    dispatch(
      setDrawerScheduleForm({
        ...scheduleForm,
        [state.target.name]: state.target.value,
      })
    );
  };

  const updateRepeat = (state: UpdateStateInterface) => {
    const { id, value } = state.target;
    if (id === "repeat") {
      const period = {
        ...scheduleForm?.period,
        repeat_end_line: getRepeatEndDate(
          scheduleForm?.start_date,
          value as string
        ),
      };
      dispatch(
        setDrawerScheduleForm({
          ...scheduleForm,
          repeat: {
            ...scheduleForm?.repeat,
            kind_type: value,
          },
          period,
        })
      );
      return;
    }

    const type = scheduleForm?.repeat.kind_type ?? "none";
    if (type !== "none") {
      const kind_type = `${type}_type` as const;
      const newValue = {
        ...scheduleForm?.repeat[kind_type],
        [id]: value,
      };
      dispatch(
        setDrawerScheduleForm({
          ...scheduleForm,
          repeat: {
            ...scheduleForm?.repeat,
            [kind_type]: newValue,
          },
        })
      );
    }
  };

  const updateExclusion = (state: boolean) => {
    dispatch(setDrawerScheduleForm({ ...scheduleForm, exclusion: state }));
  };

  const updatePeriod = (state: UpdateStateInterface) => {
    const { id, value } = state.target;
    if (id === "period") {
      dispatch(
        setDrawerScheduleForm({
          ...scheduleForm,
          period: {
            ...scheduleForm?.period,
            is_repeat_again: value === "is_repeat_again",
            kind_type: value,
          },
        })
      );
      return;
    }

    const type = scheduleForm?.period.kind_type ?? "";
    if (type !== "") {
      dispatch(
        setDrawerScheduleForm({
          ...scheduleForm,
          period: {
            ...scheduleForm?.period,
            [type]: value,
          },
        })
      );
    }
  };

  const updateYearRepeat = (id: string, value: string) => {
    dispatch(
      setDrawerScheduleForm({
        ...scheduleForm,
        repeat: {
          ...scheduleForm?.repeat,
          year_type: {
            ...scheduleForm?.repeat.year_type,
            year_category: id,
            year_repeat: value,
          },
        },
      })
    );
  };

  const updateCategory = (value: string) => {
    dispatch(
      setDrawerScheduleForm({
        ...scheduleForm,
        category: value,
        price_type: getType(value),
      })
    );
  };

  return {
    scheduleForm,
    updateSchedule,
    updateAllDay,
    updateRepeat,
    updateExclusion,
    setRandomGeneratedSchedule,
    updatePeriod,
    updateYearRepeat,
    updateCategory,
  };
};
