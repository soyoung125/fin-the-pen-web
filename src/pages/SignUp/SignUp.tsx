import { Stack } from "@mui/material";
import CenterBox from "../../components/layouts/CenterBox";
import useHeader from "../../hooks/useHeader";
import Header from "./Header.tsx";
import SignUpFields from "./SignUpFields.tsx";
import { useEffect } from "react";
import { HEADER_MODE } from "@type/common.tsx";
import { useAppDispatch } from "@redux/hooks.ts";
import {
  setBottomDrawerOpenFalse,
  setBottomDrawerOpenTrue,
} from "@redux/slices/commonSlice.tsx";

function SignUp() {
  const dispatch = useAppDispatch();

  // useHeader(false);
  useHeader(true, HEADER_MODE.sign);

  useEffect(() => {
    dispatch(setBottomDrawerOpenFalse());
    return () => dispatch(setBottomDrawerOpenTrue()) as unknown as void;
  }, []);

  return (
    <CenterBox>
      <Stack justifyContent="center" alignItems="center" px={1}>
        <Header />
        <SignUpFields />
      </Stack>
    </CenterBox>
  );
}
export default SignUp;
/**
 * 회원가입 페이지
 */
