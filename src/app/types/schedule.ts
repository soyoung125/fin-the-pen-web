import { SCHEDULE_DRAWER_MODE, VIEW_MODE } from "@constants/schedule.ts";
import { UpdateStateInterface } from "./common.ts";

interface ScheduleBase {
  schedule_id?: string;
  user_id?: string;
  event_name: string;
  category: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  period: SchedulePeriod;
  price_type: string;
  importance: string;
  fix_amount: boolean;
}

export interface Schedule extends ScheduleBase {
  all_day: boolean;
  repeat_kind: "NONE" | "DAY" | "WEEK" | "MONTH" | "YEAR";
  repeat_options: { value: string; options: string | YearCategory };
  amount: string;
  exclude: boolean;
}

export interface RequestSchedule extends ScheduleBase {
  is_all_day: boolean;
  repeat: ScheduleRepeat;
  set_amount: string;
  exclusion: boolean;
}

export interface ScheduleRepeat {
  day_type: {
    repeat_value: string;
  };
  week_type: {
    repeat_day_of_week: string;
    repeat_value: string;
  };
  month_type: {
    today_repeat: boolean;
    select_date: string;
    repeat_value: string;
  };
  year_type: {
    year_repeat: string;
    repeat_value: string;
    year_category: YearCategory; //"MonthAndDay" | "NthDayOfMonth" | "LastDayOfMonth"
  };
  kind_type: "day" | "week" | "month" | "year" | "none";
}

export type YearCategory = "MonthAndDay" | "NthDayOfMonth" | "LastDayOfMonth";

export interface SchedulePeriod {
  is_repeat_again: boolean;
  repeat_number_time: string;
  repeat_end_line: string;
  kind_type?: string;
}

export type ViewModeValue = (typeof VIEW_MODE)[keyof typeof VIEW_MODE];

export type ScheduleDrawerModeValue =
  ScheduleDrawerMode[keyof ScheduleDrawerMode];

export type ScheduleDrawerMode = typeof SCHEDULE_DRAWER_MODE;

export interface GetScheduleQuery {
  user_id: string;
  date: string;
}

export interface MonthScheduleQuery {
  user_id: string;
  date: string;
}

export interface HomeQuery {
  user_id: string;
  main_month: string;
  calendar_date: string;
}

export interface RepeatTypeProps {
  repeatType: string;
}

export interface RepeatOptionProps {
  handleChangeOption: (state: UpdateStateInterface) => void;
}

export interface RepeatProps extends RepeatTypeProps, RepeatOptionProps {}

export interface TodaySchedule extends Omit<Schedule, "schedule_id"> {
  id: string;
}

export interface MonthSchedule {
  income: string;
  available: string;
  today_schedule: TodaySchedule[];
  expense: string;
}

export type WeekSchedule = {
  [key: string]: WeeklySchedule;
} & {
  income: string;
  available: string;
  expense: string;
};

export interface WeeklySchedule {
  // 몇번째 주차인지
  week_of_number: string; //"1주차" | "2주차" | "3주차" | "4주차" | "5주차" | "6주차"
  // 해당 주차의 기간
  period: string;
  // 해당 주의 수입
  plus: number;
  // 해당 주의 지출
  minus: number;
}

export type DaySchedule = {
  [key: string]: DailySchedule;
} & {
  // 하루동안의 전체 수입
  income: string;
  // 지출 예정
  expect?: string;
  // 지출 금액
  dayExpense: string;
  // 현재 일자에 등록된 전체 일정의 개수
  schedule_count: number;
  // 사용가능 금액 = 지출 목표액 - 지출 - 지출예정
  available?: string | number;
};

export interface DailySchedule {
  // 등록된 일정의 이름
  event_name: string;
  // 일정의 시작 시간
  start_time: string;
  // 일정의 종료 시간
  end_time: string;
  // 설정된 금액 (수입 -> + / 지출 -> -)
  amount: string;
}
