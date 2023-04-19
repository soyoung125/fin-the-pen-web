export interface NestedCategory {
  type: string,
  categories: string[],
  color: string,
}

export interface CategoryType {
  type: '고정 입출금' | '수입' | '지출',
  nested: NestedCategory[]
}

const FIXED: CategoryType = {
  type: '고정 입출금',
  nested: [
    {
      type: '입금',
      categories: ['급여'],
      color: '#FF0000',
    },
    {
      type: '출금',
      categories: ['구독비', '교통비/자동차세', '(주거)관리비/월세', '핸드폰요금', '적금', '보험비', '카드이체료', '대출 상환'],
      color: '#0000FF',
    },
  ],
};

const INCOME: CategoryType = {
  type: '수입',
  nested: [
    {
      type: '용돈',
      categories: ['용돈'],
      color: '#800080',
    },
    {
      type: '대출',
      categories: ['대출'],
      color: '#FFFFFF',
    },
    {
      type: '수익',
      categories: ['금융', '사업', '기타'],
      color: '#FFD700',
    },
  ],
};

const EXPENDITURE: CategoryType = {
  type: '지출',
  nested: [
    {
      type: '음식',
      categories: ['식비', '술', '카페'],
      color: '#008000',
    },
    {
      type: '생활',
      categories: ['생필품', '주거', '통신', '자녀/육아', '반려동물', '교육/학습', '의료/건강'],
      color: '#87CEEB',
    },
    {
      type: '교통',
      categories: ['자동차', '대중교통'],
      color: '#808080',
    },
    {
      type: '문화',
      categories: ['온라인쇼핑', '패션', '미용', '영화/전시', '여행/숙박'],
      color: '#FFC0CB',
    },
    {
      type: '금융',
      categories: ['저축', '투자'],
      color: '#A52A2A',
    },
  ],
};

export interface Category {
  type: string,
  nestedType: string,
  title: string,
  color: string,
}

const flatNestedCategories = (bigType: string, cat: NestedCategory): Category[] => {
  const { type, categories, color } = cat;
  return categories.map((title) => ({
    type: bigType,
    nestedType: type,
    title,
    color,
  }));
};

const categoryFlatter = (obj: CategoryType): Category[] => {
  const { type, nested } = obj;
  const flattenedCategories = nested
    .map((cat) => flatNestedCategories(type, cat))
    .flat(Infinity);
  return flattenedCategories as Category[];
};

const CATEGORIES: ReadonlyArray<Category> = [
  ...categoryFlatter(FIXED),
  ...categoryFlatter(INCOME),
  ...categoryFlatter(EXPENDITURE),
];
export default null;
export {
  CATEGORIES, FIXED, INCOME, EXPENDITURE,
};
