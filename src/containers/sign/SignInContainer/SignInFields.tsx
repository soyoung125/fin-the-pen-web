import { Box, Button, TextField } from "@mui/material";
import { FormEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NO_BLANKS } from "../../../constants/messages";
import PATH from "../../../constants/path";
import { login, selectUser } from "../../../app/redux/slices/userSlice";
import { isObjectValuesEmpty } from "@utils/tools.ts";
import { useAppDispatch } from "../../../app/redux/hooks";

function SignInFields() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const sign = {
      user_id: data.get("email"),
      password: data.get("password"),
    };
    const invalidIndex = isObjectValuesEmpty(sign);
    if (invalidIndex === -1) {
      dispatch(login(sign));
    } else {
      alert(NO_BLANKS);
    }
  };

  useEffect(() => {
    // 로그인에 성공하는 경우를 감지하여 home으로 보내버림. 혹은, 이미 로그인 된 상태라면 홈으로 강제 이동
    if (user !== null) {
      navigate(PATH.home);
    }
  }, [user]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ maxWidth: "400px" }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />

      <Button
        onClick={() =>
          alert(
            "You forget a thousand things every day. Make sure this is one of them :)"
          )
        }
      >
        비밀번호를 잊으셨나요?
      </Button>

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        로그인
      </Button>

      <Button onClick={() => navigate(PATH.signUp)}>계정이 없으신가요?</Button>
    </Box>
  );
}
export default SignInFields;
