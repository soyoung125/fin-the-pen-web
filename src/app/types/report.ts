export interface Report {
  date: string;
  totalSpentToday: string; // 총 지출 금액
  expenseGoalAmount: string; // 지출 목표
  availableAmount: string; //사용 가능 금액
  category_consume_report: string; // 카테고리 소비
  expenditure_this_month: {
    // 이번달 소비?
    last_month_Amount: string;
    "1st_month_Amount": string;
    goal_amount: string;
    result_amount: string;
  };
  Nmonth_fixed: {
    // 고정 입출금
    previous_diff_plus: string; // 수입 차이
    fixed_deposit: string; // 고정 입금
    fixed_withdraw: string; // 고정 출금
    previous_diff_minus: string; // 출금 차이
    current_month: string; // 이달
    previous_month: string; // 전달
  };
  month_report: {
    // 월별 소비 리포트
    current: string; // 이달 소비
    second_previous: string; // 지난 달 소비
    previous: string; // 두달 전 소비
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
