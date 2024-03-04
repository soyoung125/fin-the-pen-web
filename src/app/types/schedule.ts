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
}

export interface Schedule extends ScheduleBase {
  all_day: boolean;
  repeat_kind: "NONE" | "DAY" | "WEEK" | "MONTH" | "YEAR";
  repeat_options: { value: string; options: string | YearCategory };
  amount: string;
  fix_amount: boolean;
  exclude: boolean;
}

export interface RequestSchedule extends ScheduleBase {
  is_all_day: boolean;
  repeat: ScheduleRepeat;
  set_amount: string;
  fix_amount: boolean;
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
  week_of_number: "1주차" | "2주차" | "3주차" | "4주차" | "5주차" | "6주차";
  // 해당 주차의 기간
  period: string;
  // 해당 주의 수입
  plus: number;
  // 해당 주의 지출
  minus: number;
}
