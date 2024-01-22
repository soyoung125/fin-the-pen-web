export interface ReportTypeInterface {
  type: string;
  color: string;
  title: string;
  overTitle?: string;
}

export const REPORTTYPE: ReportTypeInterface[] = [
  {
    type: "used",
    color: "#735BF2",
    title: "월 지출 금액",
  },
  {
    type: "predict",
    color: "#FF769F",
    title: "월 지출 예정 금액",
  },
  {
    type: "useable",
    color: "#0075FF",
    title: "월 사용 가능 금액",
    overTitle: "목표 지출 초과 금액",
  },
];

export const LABELS = REPORTTYPE.map((type) => type.type);

export const getAmount = (amount: number) => {
  if (amount >= 10000000000) return "99억원+";
  const hundredMillion = Math.trunc(amount / 100000000);
  const tenThousand = Math.trunc(amount / 10000) % 10000;
  const thousand = amount % 10000;

  if (hundredMillion > 0) {
    return `${hundredMillion}억${` ` + tenThousand.toLocaleString()}만원`;
  }
  if (tenThousand > 0) {
    return `${tenThousand.toLocaleString()}만${
      ` ` + thousand.toLocaleString()
    }원`;
  }
  return `${thousand.toLocaleString()}원`;
};
