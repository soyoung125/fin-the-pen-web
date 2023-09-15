/* eslint-disable consistent-return */
import {useEffect} from "react";
import {useRecoilValue} from "recoil";
import {HeaderModeType, headerRepository} from "@recoil/header.ts";

/**
 * 헤더를 관리해주는 customHook.
 * recoil에 의존한다.
 * @param {boolean} open 헤더 오픈 여부
 * @param {HeaderModeType} mode 헤더의 모드 변경
 */
const useHeader = (open: boolean, mode?: HeaderModeType) => {
  const {closeHeader, openHeader} = useRecoilValue(headerRepository)

  useEffect(() => {
    if (open) {
      openHeader(mode);
    } else {
      closeHeader(); // 페이지 진입 시 헤더 감추기
      return () => {
        openHeader(undefined); // 페이지 탈출 시 헤더 복구
      };
    }
  }, []);

};

export default useHeader;
