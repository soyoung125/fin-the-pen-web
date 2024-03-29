import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import userIcon from "@assets/icons/header/user.svg";
import RoundedButton from "../../../../common/RoundedButton.tsx";
import { PATH } from "@constants/path.ts";
import { useUser } from "@app/tanstack-query/useUser.ts";

function PersonalButton() {
  const navigate = useNavigate();
  const { data: user } = useUser();

  if (!user) {
    return (
      <RoundedButton value="login" onClick={() => navigate(PATH.signIn)}>
        <LoginIcon />
      </RoundedButton>
    );
  }

  return (
    <RoundedButton value="user" onClick={() => navigate(PATH.myPage)}>
      <img src={userIcon} alt="user" />
    </RoundedButton>
  );
}

export default PersonalButton;
