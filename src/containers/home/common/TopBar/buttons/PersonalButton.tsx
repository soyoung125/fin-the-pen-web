import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
// import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import RoundedButton from "../../../../../components/common/RoundedButton";
import PATH from "../../../../../constants/path";
import { useRecoilValue } from "recoil";
import { userState } from "@recoil/user.ts";

function PersonalButton() {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

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
