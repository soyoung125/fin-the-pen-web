/* eslint-disable consistent-return */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeaderOpenFalse, setHeaderOpenTrue } from '../domain/redux/common/commonSlice';
import { HeaderMode } from '../types/common';

/**
 * 헤더를 관리해주는 customHook.
 * 어차피 redux에게 상태 관리 맡기고 있어 상태값을 따로 반환은 해주지 않는다.
 * @param {boolean} open 헤더 오픈 여부
 * @param {HeaderMode} mode 헤더의 모드 변경
 */
const useHeader = (open: boolean, mode?: HeaderMode) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (open) {
      dispatch(setHeaderOpenTrue(mode));
    } else {
      dispatch(setHeaderOpenFalse()); // 페이지 진입 시 헤더 감추기
      return () => {
        dispatch(setHeaderOpenTrue(undefined)); // 페이지 탈출 시 헤더 복구
      };
    }
  }, []);
};
export default useHeader;
