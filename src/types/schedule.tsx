export interface Schedule {
  id?: string;
  user_id?: string;
  event_name: string;
  alarm: boolean;
  date: string;
  start_time: string;
  end_time: string;
  repeating_cycle: string;
  repeat_deadline: string;
  repeat_endDate: string;
  category: string;
  type: string;
  expected_spending: string,
  importance: string;
  exclusion: boolean;
}

export type ViewModeValue = ViewMode[keyof ViewMode];
export interface ViewMode {
  asset: 'asset';
  schedule: 'schedule';
}

export type ScheduleDrawerModeValue = ScheduleDrawerMode[keyof ScheduleDrawerMode];
export interface ScheduleDrawerMode {
  modify: 'modify';
  create: 'create'
}
