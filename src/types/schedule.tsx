import { VIEW_MODE } from "../constants/schedule.tsx";

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
  repeat: string;
  period: string;
  price_type: string;
  amount: string;
  is_fix_amount: boolean;
  importance: string;
  exclusion: boolean;
}

export type ViewModeValue = (typeof VIEW_MODE)[keyof typeof VIEW_MODE];

export type ScheduleDrawerModeValue =
  ScheduleDrawerMode[keyof ScheduleDrawerMode];

export interface ScheduleDrawerMode {
  modify: "modify";
  create: "create";
}

export interface GetScheduleQuery {
  user_id: string;
  date: string;
}

export interface MonthScheduleQuery {
  user_id: string;
  date: string;
}
