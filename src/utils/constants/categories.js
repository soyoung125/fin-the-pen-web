/* eslint-disable no-unused-vars */

const FIXED = {
  type: '고정 입출금',
  nested: [
    {
      type: '입금',
      categories: ['급여'],
    },
    {
      type: '출금',
      categories: ['구독비', '교통비/자동차세', '(주거)관리비/월세', '핸드폰요금', '적금', '보험비', '카드이체료'],
    },
  ],
};

const INCOME = {
  type: '수입',
  nested: [
    {
      type: '용돈',
      categories: ['용돈'],
    },
    {
      type: '수익',
      categories: ['금융', '사업', '기타'],
    },
  ],
};

const EXPENDITURE = {
  type: '지출',
  nested: [
    {
      type: '음식',
      categories: ['식비', '술', '카페'],
    },
    {
      type: '생활',
      categories: ['생필품', '주거', '통신', '자녀/육아', '반려동물', '교육/학습', '의료/건강'],
    },
    {
      type: '교통',
      categories: ['자동차', '대중교통'],
    },
    {
      type: '문화',
      categories: ['온라인쇼핑', '패션', '미용', '영화/전시', '여행/숙박'],
    },
    {
      type: '금융',
      categories: ['저축', '투자'],
    },
  ],
};

const categoryFlatter = (obj) => {
  const flatNestedCategories = (type, nestedType, categories) => categories.map((title) => ({
    type,
    nestedType,
    title,
  }));
  const { type } = obj;
  return obj.nested
    .map((cat) => flatNestedCategories(type, cat.type, cat.categories))
    .flat(Infinity);
};

const CATEGORIES = Object.freeze(
  [...categoryFlatter(FIXED), ...categoryFlatter(INCOME), ...categoryFlatter(EXPENDITURE)],
);

export default CATEGORIES;
