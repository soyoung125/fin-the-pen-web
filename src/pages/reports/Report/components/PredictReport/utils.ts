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
