import {
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PATH from "../../constants/path.tsx";
import { isObjectValuesEmpty } from "@utils/tools.ts";
import {
  NO_BLANKS,
  NO_DUPLICATION_ID,
  NO_SIGNAL_FROM_SERVER,
  SIGN_UP_SUCCESS,
} from "../../constants/messages.tsx";
import { DOMAIN } from "@api/url.ts";
import { FormEvent } from "react";
import { SignUp } from "@type/auth.tsx";

function SignUpFields() {
  const navigate = useNavigate();
  const signUp = async (user: SignUp) => {
    await fetch(`${DOMAIN}/fin-the-pen-web/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
        margin="dense"
        required
        fullWidth
        id="name"
        label="성명"
        name="name"
        autoFocus
        size="small"
      />

      <TextField
        margin="dense"
        required
        fullWidth
        id="email"
        label="이메일 주소"
        name="email"
        autoComplete="email"
        autoFocus
        placeholder="email@email.com"
        size="small"
      />

      <Box mt={1}>비밀번호 입력</Box>
      <TextField
        margin="dense"
        required
        fullWidth
        name="password"
        label="비밀번호"
        type="password"
        id="password"
        autoComplete="current-password"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" size="small" color="primary">
                사용가능
              </Button>
            </InputAdornment>
          ),
        }}
      />

      <Box mt={1}>전화번호 인증</Box>
      <TextField
        margin="dense"
        required
        fullWidth
        id="phoneNumber"
        label="전화번호"
        name="phoneNumber"
        autoFocus
        size="small"
        placeholder="'-'없이 입력"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" size="small" color="primary">
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
