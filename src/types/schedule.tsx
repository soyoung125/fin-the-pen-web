export interface Schedule {
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
  expected_spending: number,
  importance: string;
  exclusion: boolean;
}
