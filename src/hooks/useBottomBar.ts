import { useEffect } from "react";
import {
  setBottomBarOpenFalse,
  setBottomBarOpenTrue,
} from "@redux/slices/commonSlice.tsx";
import { useAppDispatch } from "@redux/hooks.ts";

/**
 * navigation bar를 관리해주는 customHook.
 * 어차피 redux에게 상태 관리 맡기고 있어 상태값을 따로 반환은 해주지 않는다.
 * @param {boolean} open bottom bar 오픈 여부
 */
const useBottomBar = (open: boolean) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (open) {
      dispatch(setBottomBarOpenTrue());
    } else {
      dispatch(setBottomBarOpenFalse()); // 페이지 진입 시 헤더 감추기
      return () => {
        dispatch(setBottomBarOpenTrue()); // 페이지 탈출 시 헤더 복구
      };
    }
  }, []);
};
export default useBottomBar;
