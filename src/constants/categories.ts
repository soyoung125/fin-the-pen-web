/* eslint-disable max-len */
import {
  blue,
  blueGrey,
  brown,
  green,
  indigo,
  pink,
  red,
} from "@mui/material/colors";

export interface NestedCategory {
  type: string;
  categories: string[];
  color: string;
}

export interface CategoryType {
  type: "고정 입출금" | "수입" | "지출";
  nested: NestedCategory[];
}

export const FIXED: CategoryType = {
  type: "고정 입출금",
  nested: [
    {
      type: "입금",
      categories: ["급여"],
      color: "#FF0000",
    },
    {
      type: "출금",
      categories: [
        "구독비",
        "교통비/자동차세",
        "(주거)관리비/월세",
        "핸드폰요금",
        "적금",
        "보험비",
        "카드이체료",
        "대출 상환",
      ],
      color: "#0000FF",
    },
  ],
};

export const INCOME: CategoryType = {
  type: "수입",
  nested: [
    {
      type: "용돈",
      categories: ["용돈"],
      color: "#800080",
    },
    {
      type: "대출",
      categories: ["대출"],
      color: "#FFFFFF",
    },
    {
      type: "수익",
      categories: ["금융", "사업", "기타"],
      color: "#FFD700",
    },
  ],
};

export const EXPENDITURE: CategoryType = {
  type: "지출",
  nested: [
    {
      type: "음식",
      categories: ["식비", "술", "카페"],
      color: "#008000",
    },
    {
      type: "생활",
      categories: [
        "생필품",
        "주거",
        "통신",
        "자녀/육아",
        "반려동물",
        "교육/학습",
        "의료/건강",
      ],
      color: "#87CEEB",
    },
    {
      type: "교통",
      categories: ["자동차", "대중교통"],
      color: "#808080",
    },
    {
      type: "문화",
      categories: ["온라인쇼핑", "패션", "미용", "영화/전시", "여행/숙박"],
      color: "#FFC0CB",
    },
    {
      type: "금융",
      categories: ["저축", "투자"],
      color: "#A52A2A",
    },
  ],
};

export interface Category {
  type: string;
  nestedType: string;
  title: string;
  color: string;
}

export const flatNestedCategories = (
  bigType: string,
  cat: NestedCategory
): Category[] => {
  const { type, categories, color } = cat;
  return categories.map((title) => ({
    type: bigType,
    nestedType: type,
    title,
    color,
  }));
};

export const categoryFlatter = (obj: CategoryType): Category[] => {
  const { type, nested } = obj;
  const flattenedCategories = nested
    .map((cat) => flatNestedCategories(type, cat))
    .flat(Infinity);
  return flattenedCategories as Category[];
};

export const CATEGORIES: ReadonlyArray<Category> = [
  ...categoryFlatter(FIXED),
  ...categoryFlatter(INCOME),
  ...categoryFlatter(EXPENDITURE),
];

export const COLORLIST: string[] = [
  indigo[100],
  indigo[200],
  indigo[300],
  indigo[400],
  indigo[500],
  indigo[600],
  indigo[700],
  indigo[800],
  green[100],
  green[200],
  green[300],
  blue[100],
  blue[200],
  blue[300],
  blue[400],
  blue[500],
  blue[600],
  blue[700],
  blueGrey[100],
  blueGrey[200],
  pink[100],
  red[100],
  pink[200],
  red[200],
  pink[300],
  brown[100],
  brown[200],
];
