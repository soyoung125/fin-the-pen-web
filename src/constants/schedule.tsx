import moment from "moment";
import { Schedule } from "@type/schedule.tsx";
import { getInitRepeat } from "@containers/home/ScheduleDrawer/domain/schedule";

const SCHEDULE_DRAWER = {
  drawer_title: {
    create: "새로운 이벤트",
    read: "일정",
    modify: "일정 편집",
  },
  name: "제목",
  date: "날짜",
  start: "시작",
  end: "종료",
  repeat: "반복",
  period: "기간",
  all_day: "하루종일",
  category_title: "일정 카테고리",
  add_category: "+ 카테고리 추가",
  set_finance_title: "자산 설정하기",
  set_spending_title: "금액 설정",
  type_plus: "+", // 저장 데이터와 연동되어 있음 (수정금지)
  type_minus: "-", // 저장 데이터와 연동되어 있음 (수정금지)
  won: "원",
  expected_spending: "예상 비용",
  fix_amount: "금액 고정",
  set_importance_title: "일정 중요도",
  importance_high: "상", // 저장 데이터와 연동되어 있음 (수정금지)
  importance_middle: "중", // 저장 데이터와 연동되어 있음 (수정금지)
  importance_low: "하", // 저장 데이터와 연동되어 있음 (수정금지)
  exclusion_title: "예산에서 제외",
  add_schedule: {
    create: "일정 추가하기",
    read: "문구를 뭐로할까요",
    modify: "수정 완료",
  },
} as const;

const IMPORTANCES = [
  {
    id: "importance_low",
    value: "하",
    label: "낮음",
  },
  {
    id: "importance_middle",
    value: "중",
    label: "중간",
  },
  {
    id: "importance_high",
    value: "상",
    label: "높음",
  },
];

const SCHEDULE_DRAWER_MODE = {
  modify: "modify",
  create: "create",
} as const;

const NEED_TITLE = "제목을 입력해야 합니다.";
const NEED_CATEGORY = "카테고리를 선택해야 합니다.";
const WRONG_TIME_ORDER = "종료 시각이 시작 시각보다 빠르지 않았으면 좋겠어요.";

const INIT_SCHEDULE = (date: string, start_time: string): Schedule => ({
  event_name: "",
  start_date: date,
  end_date: date,
  start_time: `${start_time}:00`,
  end_time: `${moment(start_time, "HH").add(2, "h").format("HH")}:00`,
  category: "",
  all_day: false,
  repeat: getInitRepeat(moment(date)),
  period: "All",
  price_type: SCHEDULE_DRAWER.type_minus,
  amount: "0",
  fix_amount: false,
  importance: SCHEDULE_DRAWER.importance_middle,
  exclude: false, // false면 포함
});

const REPEAT_CYCLE = {
  일간: "days",
  주간: "weeks",
  월간: "months",
  연간: "years",
} as const;

const VIEW_MODE = {
  asset: "asset",
  schedule: "schedule",
} as const;

const REGULAR_DEPOSIT_WITHDRAWAL_TYPE = {
  "+": "입금",
  "-": "출금",
} as const;

export default null;
export {
  SCHEDULE_DRAWER,
  SCHEDULE_DRAWER_MODE,
  IMPORTANCES,
  NEED_TITLE,
  NEED_CATEGORY,
  WRONG_TIME_ORDER,
  INIT_SCHEDULE,
  REPEAT_CYCLE,
  VIEW_MODE,
  REGULAR_DEPOSIT_WITHDRAWAL_TYPE,
};
