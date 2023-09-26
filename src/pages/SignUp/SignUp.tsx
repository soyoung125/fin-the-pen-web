import { Stack } from "@mui/material";
import CenterBox from "../../components/layouts/CenterBox";
import useHeader from "../../hooks/useHeader";
import Header from "./Header.tsx";
import SignUpFields from "./SignUpFields.tsx";
import { useRecoilValue } from "recoil";
import { bottomTabMenuRepository } from "@app/recoil/bottomTabMenu.ts";
import { useEffect } from "react";

function SignUp() {
  const { openBottomBar, closeBottomBar } = useRecoilValue(bottomTabMenuRepository);
  
  useHeader(false);
  
  useEffect(() => {
    closeBottomBar();
    return (() => openBottomBar());
  }, [])

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
