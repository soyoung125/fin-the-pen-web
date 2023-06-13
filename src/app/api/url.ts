/**
 * 반드시 슬래시가 없는 상태로 끝내기
 */

export const url: { [server: string]: string } = {
  guest: "",
  real: "/real", // vite proxy에 의해 외부 서버로 통신 시 CORS 문제가 해결됨
};
