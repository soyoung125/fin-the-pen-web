/**
 * 반드시 슬래시가 없는 상태로 끝내기
 */

export const DOMAIN =
  process.env.NODE_ENV === "production"
    ? "https://api.foo.com" // 배포 시 실제로 연결할 서버로 변경하기 http://ec2-43-202-60-242.ap-northeast-2.compute.amazonaws.com:8080
    : "/local"; // 로컬 서버와 연결할 때 (단, MSW 동작 시 로컬 서버로 요청이 나가지 않고 mocking 당할 수 있음)
