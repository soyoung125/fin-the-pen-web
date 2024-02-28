export interface Report {
  date: string;
  totalSpentToday: number; // 총 지출 금액
  expenseGoalAmount: number; // 지출 목표
  availableAmount: number; // 사용 가능 금액
  category_consume_report: CategoryReport[]; // 카테고리 소비
  expenditure_this_month: {
    last_month_Amount: number;
    "1st_month_Amount": number;
    goal_amount: number;
    result_amount: number;
  };
  Nmonth_fixed: {
    previous_diff_plus: string; // 수입 차이
    fixed_deposit: number; // 고정 입금
    fixed_withdraw: number; // 고정 출금
    previous_diff_minus: string; // 출금 차이
    current_month: string; // 이달
    previous_month: string; // 전달
  };
  month_report: {
    // 월별 소비 리포트
    current: number; // 이달 소비
    second_previous: number; // 지난 달 소비
    previous: number; // 두달 전 소비
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
