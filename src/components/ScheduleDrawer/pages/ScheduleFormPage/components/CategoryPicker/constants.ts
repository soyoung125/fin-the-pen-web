export const INCOME_CATEGORY = [
  "급여",
  "용돈",
  "대출금",
  "금융수입",
  "사업수입",
  "기타",
];

export const EXPENDITURE_FOOD_CATEGORY = ["식비", "카페", "술"];
export const EXPENDITURE_LIFE_CATEGORY = [
  "주거/통신",
  "의료/건강",
  "자녀/육아",
  "반려동물",
];

export const EXPENDITURE_TRANSPORTATION_CATEGORY = ["교통수단", "자동차"];
export const EXPENDITURE_CULTURE_CATEGORY = [
  "온라인결제",
  "뷰티/미용",
  "패션/쇼핑",
  "영화/전시",
  "여행/숙박",
  "경조/선물",
  "구독비",
];
export const EXPENDITURE_FINANCE_CATEGORY = ["대출상환", "대출이자"];

export const EXPENDITURE_CATEGORY = [
  {
    name: "음식",
    subCategory: EXPENDITURE_FOOD_CATEGORY,
  },
  {
    name: "생활",
    subCategory: EXPENDITURE_LIFE_CATEGORY,
  },
  {
    name: "교통",
    subCategory: EXPENDITURE_TRANSPORTATION_CATEGORY,
  },
  {
    name: "문화",
    subCategory: EXPENDITURE_CULTURE_CATEGORY,
  },
  {
    name: "금융",
    subCategory: EXPENDITURE_FINANCE_CATEGORY,
  },
  {
    name: "기타지출",
    subCategory: ["기타"],
  },
];

export const CATEGORIES = [
  ...INCOME_CATEGORY,
  ...EXPENDITURE_FINANCE_CATEGORY,
  ...EXPENDITURE_CULTURE_CATEGORY,
  ...EXPENDITURE_LIFE_CATEGORY,
  ...EXPENDITURE_FOOD_CATEGORY,
  ...EXPENDITURE_TRANSPORTATION_CATEGORY,
  "기타",
];
