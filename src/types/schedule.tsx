import { VIEW_MODE } from "../constants/schedule.tsx";

export interface Schedule {
  id?: string;
  user_id?: string;
  event_name: string;
  alarm: boolean;
  date: string;
  start_time: string;
  end_time: string;
  repeating_cycle: "일간" | "주간" | "월간" | "연간" | "없음";
  repeat_deadline: string;
  repeat_endDate: string;
  category: string;
  type: string;
  expected_spending: string;
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
