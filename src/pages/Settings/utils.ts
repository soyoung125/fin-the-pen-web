const DISPLAY = ["다크모드켜기", "어플비밀번호설정", "금액숨기기"];
const SECURE = ["비밀번호설정", "비밀번호변경"];
const ALARM = ["알림데이터"];
const CONNECT = ["My데이터", "캘린더연동"];
const INFO = ["공지사항", "인증서", "약관및정책", "버전정보"];
const MENUS: { [key: string]: string[] } = {
  display: ["다크모드켜기", "어플비밀번호설정", "금액숨기기"],
  secure: ["비밀번호설정", "비밀번호변경"],
  alarm: ["알림데이터"],
  connect: ["My데이터", "캘린더연동"],
  info: ["공지사항", "인증서", "약관및정책", "버전정보"],
};

export const findMenu = (value: string) => {
  const newValue = value.replaceAll(" ", "");
  const menus = Object.keys(MENUS);

  return menus.filter(
    (menu) => MENUS[menu].filter((m) => m.includes(newValue)).length !== 0
  );
};
