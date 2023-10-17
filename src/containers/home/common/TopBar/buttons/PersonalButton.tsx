import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
// import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import RoundedButton from "../../../../../components/common/RoundedButton";
import PATH from "../../../../../constants/path";
import { useRecoilValue } from "recoil";
import { useSelector } from "react-redux";
import { selectUser } from "@redux/slices/userSlice.tsx";

function PersonalButton() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

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
