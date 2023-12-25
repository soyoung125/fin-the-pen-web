interface ColorType {
  color: string;
  bgColor: string;
}

export const colorOfRank = (rank: number): ColorType => {
  switch (rank) {
    case 1:
      return {
        color: "#1C0690",
        bgColor: "#E4E0FF",
      };
    case 2:
      return {
        color: "#03318A",
        bgColor: "#D0EBFF",
      };
    case 3:
      return {
        color: "#049348",
        bgColor: "#D4FFE7",
      };
    case 4:
      return {
        color: "#913D00",
        bgColor: "#FFF4C6",
      };
    case 5:
      return {
        color: "#830000",
        bgColor: "#FFE7F4",
      };
    default:
      return {
        color: "#43464C",
        bgColor: "#C8CBD0",
      };
  }
};
