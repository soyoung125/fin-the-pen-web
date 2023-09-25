import { Stack } from "@mui/material";
import CenterBox from "../../components/layouts/CenterBox";
import useHeader from "../../hooks/useHeader";
import Header from "./Header.tsx";
import SignUpFields from "./SignUpFields.tsx";

function SignUp() {
  useHeader(false);

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
