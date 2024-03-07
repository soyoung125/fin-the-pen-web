import { Schedule } from "@app/types/schedule.ts";

export interface Report {
  date: string;
  totalSpentToday: number | "0"; // 총 지출 금액
  expenseGoalAmount: number | "0"; // 지출 목표
  availableAmount: number | "0"; // 사용 가능 금액
  category_consume_report: CategoryReport[] | "0"; // 카테고리 소비
  expenditure_this_month: {
    last_month_Amount: number | "0";
    "1st_month_Amount": number | "0";
    goal_amount: number | "0";
    result_amount: number | "0";
  };
  Nmonth_fixed: {
    previous_diff_plus: string; // 수입 차이
    fixed_deposit: number | "0"; // 고정 입금
    fixed_withdraw: number | "0"; // 고정 출금
    previous_diff_minus: string; // 출금 차이
    current_month: string; // 이달
    previous_month: string; // 전달
  };
  month_report: {
    // 월별 소비 리포트
    current: number | "0"; // 이달 소비
    second_previous: number | "0"; // 지난 달 소비
    previous: number | "0"; // 두달 전 소비
  };
}

export interface CategoryReport {
  amount: number;
  rate: string;
  category: string;
}

export interface GoalResponse {
  user_id: string;
  date: string;
  expenditure_amount: string;
}

export interface CategoryDetailResponse {
  month_schedule: Schedule[];
  current_date: string;
  category_expense: string;
  category: string;
  category_expect: string;
}

export interface CategoryDetailQuery {
  user_id: string;
  date: string;
  category: string;
}

export interface CategoryDetail {
  month_schedule: { [key: string]: Schedule[] };
  current_date: string;
  category_expense: string;
  category: string;
  category_expect: string;
}
