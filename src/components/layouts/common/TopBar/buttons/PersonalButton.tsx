import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
// import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import RoundedButton from "../../../../common/RoundedButton.tsx";
import { PATH } from "@constants/path.ts";
import { useUser } from "@app/tanstack-query/useUser.ts";

function PersonalButton() {
  const navigate = useNavigate();
  const { data: user } = useUser();

  if (user === undefined) {
    return (
      <RoundedButton value="login" onClick={() => navigate(PATH.signIn)}>
        <LoginIcon />
      </RoundedButton>
    );
  }

  return (
    <RoundedButton value="user" onClick={() => navigate(PATH.myPage)}>
      <PersonOutlineOutlinedIcon />
    </RoundedButton>
  );
}

export default PersonalButton;
