export interface Category {
  type: string;
  subCategories: string[];
}

export const categories: Category[] = [
  {
    type: "음식",
    subCategories: ["식비", "카페", "술"],
  },
  {
    type: "생활",
    subCategories: ["주거/통신", "의료/건강", "자녀/육아", "반려동물"],
  },
  {
    type: "교통",
    subCategories: ["교통수단", "자동차"],
  },
  {
    type: "금융",
    subCategories: [
      "온라인 결제",
      "뷰티/미용",
      "패션/쇼핑",
      "여행/숙박",
      "경조/선물",
      "구독비",
    ],
  },
  {
    type: "기타 지출",
    subCategories: ["대출 상환", "대출 이자"],
  },
];
