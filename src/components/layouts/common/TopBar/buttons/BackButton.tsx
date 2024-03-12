import RoundedButton from "@components/common/RoundedButton.tsx";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  handleClick?: () => void;
}

function BackButton({ handleClick }: BackButtonProps) {
  const navigate = useNavigate();
  // 임시로 이렇게 처리해둠
  return (
    <RoundedButton
      value="back_button"
      onClick={() => (handleClick ? handleClick() : navigate(-1))}
    >
      <ArrowBackIosIcon sx={{ color: "#000000" }} />
    </RoundedButton>
  );
}

export default BackButton;
