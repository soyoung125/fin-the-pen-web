import { Button } from "@mui/material";
import { useAuth } from "@app/tanstack-query/useAuth.ts";

function MockSignIn() {
  const { mockSignIn } = useAuth();

  const guestLogin = () => {
    alert("미구현 ");
  };

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="error"
      sx={{ mt: 3, mb: 2 }}
      onClick={() => guestLogin()}
    >
      Guest 계정으로 로그인 하기
    </Button>
  );
}
export default MockSignIn;
