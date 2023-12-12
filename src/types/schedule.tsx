import { SCHEDULE_DRAWER_MODE, VIEW_MODE } from "../constants/schedule.tsx";

export interface Schedule {
  id?: string;
  user_id?: string;
  event_name: string;
  category: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  all_day: boolean;
  repeat: ScheduleRepeat;
  period: string;
  price_type: string;
  amount: string;
  fix_amount: boolean;
  importance: string;
  exclude: boolean;
}

export interface RequestSchedule {
  user_id?: string;
  event_name: string;
  category: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  is_all_day: boolean;
  repeat: string;
  period: string;
  price_type: string;
  set_amount: string;
  fix_amount: boolean;
  importance: string;
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
    year_category: "MonthAndDay";
  };
  kind_type: "day_type" | "week_type" | "month_type" | "year_type" | "None";
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
