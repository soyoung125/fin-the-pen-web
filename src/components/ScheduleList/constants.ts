// 수입
import salary from "@assets/icons/category/급여.svg";
import pin_money from "@assets/icons/category/용돈.svg";
import loan from "@assets/icons/category/대출.svg";
import financial_income from "@assets/icons/category/금융수입.svg";
import corporate_income from "@assets/icons/category/기업수입.svg";
import other_income from "@assets/icons/category/기타 수입.svg";
// 지출 - 식비
import food from "@assets/icons/category/식비.svg";
import cafe from "@assets/icons/category/카페.svg";
import alcohol from "@assets/icons/category/술.svg";
// 지출 - 생활
import residential from "@assets/icons/category/주거 통신.svg";
import medical_health from "@assets/icons/category/의료 건강.svg";
import parenting from "@assets/icons/category/육아 자녀.svg";
import pet from "@assets/icons/category/반려동물.svg";
// 지출 - 교통
import transportation_fee from "@assets/icons/category/교통.svg";
import automobile from "@assets/icons/category/자동차.svg";
// 지출 - 문화
import online from "@assets/icons/category/온라인 결제.svg";
import beauty from "@assets/icons/category/뷰티 미용.svg";
import fashion from "@assets/icons/category/패션 쇼핑.svg";
import movie from "@assets/icons/category/영화 전시.svg";
import travel from "@assets/icons/category/여행 숙박.svg";
import events from "@assets/icons/category/경조사.svg";
import subscribe from "@assets/icons/category/구독료.svg";
// 지출 - 금융
import loan_repayment from "@assets/icons/category/대출 상환.svg";
import loan_interest from "@assets/icons/category/대출 이자.svg";

export const CATEGORY_ICONS: { [key: string]: any } = {
  급여: salary,
  용돈: pin_money,
  대출금: loan,
  금융수입: financial_income,
  사업수입: corporate_income,
  기타: other_income,
  식비: food,
  카페: cafe,
  술: alcohol,
  "주거/통신": residential,
  "의료/건강": medical_health,
  "자녀/육아": parenting,
  반려동물: pet,
  교통수단: transportation_fee,
  자동차: automobile,
  온라인결제: online,
  "뷰티/미용": beauty,
  "패션/쇼핑": fashion,
  "영화/전시": movie,
  "여행/숙박": travel,
  "경조/선물": events,
  구독비: subscribe,
  대출상환: loan_repayment,
  대출이자: loan_interest,
};
