import { Stack } from "@mui/material";
import CenterBox from "../../components/layouts/CenterBox";
import Header from "./Header.tsx";
import SignInFields from "./SignInFields.tsx";
import Footer from "./Footer.tsx";
import useHeader from "../../hooks/useHeader";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@redux/slices/userSlice.tsx";
import { HEADER_MODE } from "@type/common.tsx";
import { useAppDispatch } from "@redux/hooks.ts";
import {
  setBottomDrawerOpenFalse,
  setBottomDrawerOpenTrue,
} from "@redux/slices/commonSlice.tsx";

function SignIn() {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  // useHeader(false);
  useHeader(true, HEADER_MODE.sign);

  useEffect(() => {
    dispatch(setBottomDrawerOpenFalse());
    return () => dispatch(setBottomDrawerOpenTrue()) as unknown as void;
  }, []);

  return (
    <CenterBox>
      <Stack justifyContent="center" alignItems="center" px={1}>
        {user === null ? ( // 버그 수정 필요
          <>
            <Header />
            <SignInFields />
          </>
        ) : (
          <div>이미 로그인이 되어있습니다.</div>
        )}
        <Footer />
      </Stack>
    </CenterBox>
  );
}
export default SignIn;
