import { UpdateStateInterface } from "@type/common.tsx";
import {
  selectSchedule,
  setDrawerSchedule,
} from "@redux/slices/scheduleSlice.tsx";
import moment from "moment/moment";
import { CATEGORIES, Category } from "../../../../constants/categories.tsx";
import { SCHEDULE_DRAWER } from "../../../../constants/schedule.tsx";
import { useAppDispatch } from "@redux/hooks.ts";
import { useSelector } from "react-redux";

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

export const useScheduleForm = () => {
  const dispatch = useAppDispatch();
  const scheduleForm = useSelector(selectSchedule);
  const updateSchedule = (
    state:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | UpdateStateInterface
  ) => {
    dispatch(
      setDrawerSchedule({
        ...scheduleForm,
        [state.target.id]: state.target.value,
      })
    );
    if (state.target.id === "start_time") {
      const endTime = moment(state.target.value as string, "HH:mm")
        .add(2, "hours")
        .format("HH:mm");
      dispatch(
        setDrawerSchedule({
          ...scheduleForm,
          [state.target.id]: state.target.value,
          end_time: endTime,
        })
      );
    }
    if (
      state.target.id === "start_date" &&
      moment(scheduleForm?.end_date).isBefore(state.target.value as string)
    ) {
      dispatch(
        setDrawerSchedule({
          ...scheduleForm,
          end_date: state.target.value,
          [state.target.id]: state.target.value,
        })
      );
    }
    if (
      state.target.id === "end_date" &&
      moment(scheduleForm?.start_date).isAfter(state.target.value as string)
    ) {
      dispatch(
        setDrawerSchedule({
          ...scheduleForm,
          start_date: state.target.value,
          [state.target.id]: state.target.value,
        })
      );
    }
  };
  const updateAllDay = (state: {
    target: { value: boolean; name: string };
  }) => {
    dispatch(
      setDrawerSchedule({
        ...scheduleForm,
        [state.target.name]: state.target.value,
      })
    );
  };
  const updateRepeat = (state: { target: { value: string; name: string } }) => {
    dispatch(
      setDrawerSchedule({
        ...scheduleForm,
        [state.target.name]: state.target.value,
      })
    );
  };
  const updateRepeatEndDate = (
    setRepeatEndDate: React.Dispatch<React.SetStateAction<moment.Moment>>,
    endDate: moment.Moment | null
  ) => {
    if (endDate?.isBefore(scheduleForm?.end_date)) {
      alert("반복 종료일을 다시 선택해주세요.");
    } else {
      endDate && setRepeatEndDate(endDate);
    }
  };
  const updateSpendingType = () => {
    if (scheduleForm?.price_type === SCHEDULE_DRAWER.type_plus) {
      dispatch(
        setDrawerSchedule({ ...scheduleForm, type: SCHEDULE_DRAWER.type_minus })
      );
    } else {
      dispatch(
        setDrawerSchedule({ ...scheduleForm, type: SCHEDULE_DRAWER.type_plus })
      );
    }
  };
  const updateExclusion = (state: boolean) => {
    dispatch(setDrawerSchedule({ ...scheduleForm, exclude: state }));
  };

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
    dispatch(setDrawerSchedule(randomSchedule));
  };

  return {
    scheduleForm,
    updateSchedule,
    updateAllDay,
    updateRepeat,
    updateRepeatEndDate,
    updateSpendingType,
    updateExclusion,
    setRandomGeneratedSchedule,
  };
};
