const INCOME = '수입';
const TRANSFER = '이체';
const EXPENDITURE = '지출';

const CATEGORIES = Object.freeze([
  {
    title: '급여',
    type: INCOME,
  },
  {
    title: '용돈',
    type: INCOME,
  },
  {
    title: '금융수입',
    type: INCOME,
  },
  {
    title: '내 계좌',
    type: TRANSFER,
  },
  {
    title: '이체',
    type: TRANSFER,
  },
  {
    title: '카드대금',
    type: TRANSFER,
  },
  {
    title: '식비',
    type: EXPENDITURE,
  },
  {
    title: '카페/간식',
    type: EXPENDITURE,
  },
  {
    title: '술',
    type: EXPENDITURE,
  },
]);

export default CATEGORIES;
