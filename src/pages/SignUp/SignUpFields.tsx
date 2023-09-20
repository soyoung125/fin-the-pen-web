import { Box, Button, InputAdornment, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PATH from "@constants/path.tsx";
import { isObjectValuesEmpty } from "@domain/tools.ts";
import {
  NO_BLANKS,
  NO_DUPLICATION_ID,
  NO_SIGNAL_FROM_SERVER,
  SIGN_UP_SUCCESS,
} from "@constants/messages.tsx";
import { SignUp } from "@type/common.tsx";
import { DOMAIN } from "@api/url.ts";
import { FormEvent } from "react";

function SignUpFields() {
  const navigate = useNavigate();
  const signUp = async (user: SignUp) => {
    await fetch(`${DOMAIN}/fin-the-pen-web/sign-up`, {
      method: "POST",
      body: JSON.stringify(user),
    })
      .then(async (res) => {
        const data = await res.json();
        if (data === true) {
          alert(SIGN_UP_SUCCESS);
          navigate(PATH.signIn);
        } else {
          alert(NO_DUPLICATION_ID);
        }
      })
      .catch((err) => {
        alert(NO_SIGNAL_FROM_SERVER);
        console.error(err);
      });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      user_id: data.get("email"),
      password: data.get("password"),
      name: data.get("name"),
      phone_number: data.get("phoneNumber"),
    };
    const invalidIndex = isObjectValuesEmpty(user);
    if (invalidIndex === -1) {
      signUp(user);
    } else {
      alert(NO_BLANKS);
    }
  };

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
        id="name"
        label="성명"
        name="name"
        autoFocus
      />

      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="이메일 주소"
        name="email"
        autoComplete="email"
        autoFocus
      />

      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="비밀번호"
        type="password"
        id="password"
        autoComplete="current-password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" size="small" color="success">
                사용가능
              </Button>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        id="phoneNumber"
        label="전화번호"
        name="phoneNumber"
        autoFocus
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" size="small" color="success">
                인증완료
              </Button>
            </InputAdornment>
          ),
        }}
      />
      <Stack direction="row" spacing={1} my={2}>
        <Button
          fullWidth
          variant="contained"
          color="error"
          onClick={() => navigate(PATH.signIn)}
        >
          뒤로가기
        </Button>
        <Button type="submit" fullWidth variant="contained">
          회원가입
        </Button>
      </Stack>
    </Box>
  );
}

export default SignUpFields;
