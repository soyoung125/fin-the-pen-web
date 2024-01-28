export const getSelectedType = (type: string) => {
  switch (type) {
    case "used":
      return "지출";
    case "predict":
      return "예정";
    case "useable":
      return "잔액";
    default:
      return "";
  }
};
