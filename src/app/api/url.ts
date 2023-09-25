/**
 * 반드시 슬래시가 없는 상태로 끝내기
 */

// deprecated
export const url: { [server: string]: string } = {
  guest: "",
  real: "/real", // vite proxy에 의해 외부 서버로 통신 시 CORS 문제가 해결됨
};

export const DOMAIN =
  process.env.NODE_ENV === "production"
    ? "https://api.foo.com"
    : "http://localhost:8080";
