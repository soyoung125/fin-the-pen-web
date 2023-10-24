import RoundedButton from "@components/common/RoundedButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  // 임시로 이렇게 처리해둠
  return (
    <RoundedButton value="login" onClick={() => navigate(-1)}>
      <ArrowBackIosIcon sx={{ color: "#000000" }} />
    </RoundedButton>
  );
}

export default BackButton;
