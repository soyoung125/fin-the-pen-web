export interface Goal {
  // 한 해 저축 목표
  goal_amount: SavingGoal;
  // 개인적인 목표
  personal_goal: PersonalGoal;
}

export interface SavingGoal {
  // DB에 저장된 row의 key
  key_id: string | null;
  // 현재 로그인된 사용자 id
  user_id: string;
  // 한 해 저축 목표 금액
  years_goal_amount: string;
  // 한 달의 저축 목표 금액 (front에서 한해 (year)만 받아도 back에서 계산합니다)
  months_goal_amount: string;
}

export interface PersonalGoal {
  // 현재 로그인된 사용자 id
  user_id: string;
  // 목표의 이름
  goal_name: string;
  // 설정된 목표 금액
  goal_amount: string;
  // 기간
  period: string;
  // 기준 month or day
  criteria: "day" | "month" | "?";
  // 요구되는 금액
  required_amount: string;
  // 적금액 송금 설정 true or false
  is_remittance: string;
  // pop on true or false
  is_pop_on: string;
}

export interface setSavingGoalQuery {
  user_id: string;
  years_goal_amount: string;
}

export interface SetPersonalGoalQuery {
  user_id?: string;
  personal_goal: string;
  goal_amount: string;
  period: string;
  criteria: "month" | "day";
  required_amount: string;
  is_remittance: boolean;
  pop_on: boolean;
}

export interface PersonalGoalForm {
  personal_goal: string;
  goal_amount: number;
  period: string;
  criteria: "day" | "month"; // day||month
  is_remittance: boolean;
  pop_on: boolean;
}
